from flask import Flask, jsonify, request
from flask_caching import Cache
from pathlib import Path
import sys

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
sys.path.append(PROJECT_PATH)

from src.api.get_features import get_url_features, get_scaled_features
from src.api.api_utils import get_model, read_prediction, get_timestamp, main_page_dict, docs_dict, models_available

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple',
              'CACHE_DEFAULT_TIMEOUT': 60})

@app.route('/', methods=['GET'])
@cache.cached(timeout=3600)
def main():
    return jsonify(main_page_dict), 200


@app.route('/docs', methods=['GET'])
@cache.cached(timeout=3600)
def get_docs():
    return jsonify(docs_dict), 200
    

@app.route('/get_features', methods=['POST'])
@cache.cached(timeout=60, key_prefix=lambda: f"get_features:{request.json.get('url')}")
async def get_features():
    url = request.json.get('url')

    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400
    
    timestamp = get_timestamp()
    features_dict = get_url_features(url)

    return jsonify({
        "url_features" : features_dict,
        "timestamp" : timestamp
    }), 200


@app.route('/models', methods=['GET'])
@cache.cached(timeout=3600)
def get_models_available():
    return jsonify({
        "models_available" : models_available
    }), 200


@app.route('/scan', methods=['POST'])
@cache.cached(timeout=60, key_prefix=lambda: f"scan:{request.json.get('url')}:{request.json.get('model')}")
async def scan():
    url = request.json.get('url')
    selected_model = request.json.get('model')
    
    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400
    
    if selected_model not in models_available:
        return jsonify({'error': 'Model should be one of: ' + " ,".join(models_available)}), 400
    
    scaled_url_features = get_scaled_features(url)

    model = get_model(selected_model)
    model_prediction = model.predict(scaled_url_features)
    prediction = read_prediction(model_prediction)
    timestamp = get_timestamp()
    
    return jsonify({
        "prediction": prediction,
        "model_used" : selected_model,
        "timestamp" : timestamp
    }), 200


@app.route('/scan_all', methods=['POST'])
@cache.cached(timeout=60, key_prefix=lambda: f"scan_all:{request.json.get('url')}")
async def scan_all():
    url = request.json.get('url')

    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400
    
    scaled_url_features = get_scaled_features(url)
    
    base_rf_model = get_model("base_rf")
    tuned_rf_model = get_model("tuned_rf")

    base_rf_prediction = base_rf_model.predict(scaled_url_features)
    tuned_rf_prediction = tuned_rf_model.predict(scaled_url_features)

    prediciton_base = read_prediction(base_rf_prediction)
    prediction_tuned = read_prediction(tuned_rf_prediction)
    timestamp = get_timestamp()

    return jsonify({
        "Base random forest prediction" : prediciton_base,
        "Tuned random forest prediction" : prediction_tuned,
        "timestamp" : timestamp
    }), 200
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
