import sys
from pathlib import Path

from api_utils import (get_model, get_timestamp, main_page_dict,
                       models_available, read_prediction)
from flask import Flask, jsonify, request
from flask_caching import Cache
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from get_features import get_scaled_features, get_url_features

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
sys.path.append(PROJECT_PATH)


app = Flask(__name__)
CORS(app)

SWAGGER_URL = '/docs'
API_URL = '/static/swagger.json'
all_models = "base_rf_tuned_rf"

SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "MalURLs"
    }
)

app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)

cache = Cache(app, config={'CACHE_TYPE': 'simple',
              'CACHE_DEFAULT_TIMEOUT': 60})


@app.route('/', methods=['GET'])
@cache.cached(timeout=3600)
def main():
    return jsonify(main_page_dict), 200


@app.route('/get_features', methods=['POST'])
@cache.cached(timeout=60, key_prefix=lambda: f"get_features:{request.json.get('url')}")
async def get_features():
    url = request.json.get('url')

    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400

    timestamp = get_timestamp()
    features_dict = get_url_features(url)

    return jsonify({
        "url_features": features_dict,
        "timestamp": timestamp
    }), 200


@app.route('/models', methods=['GET'])
@cache.cached(timeout=3600)
def get_models_available():
    return jsonify({
        "models_available": models_available
    }), 200


@app.route('/scan', methods=['POST'])
@cache.cached(timeout=60, key_prefix=lambda: f"scan:{request.json.get('url')}:{request.json.get('model')}")
async def scan():
    url = request.json.get('url')
    selected_model = request.json.get('model')

    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400

    if selected_model not in models_available and selected_model != all_models:
        return jsonify({'error': 'Model should be one of: ' +
                        " ,".join(models_available)}), 400

    scaled_url_features = get_scaled_features(url)
    response = []

    if selected_model == all_models:

        for string_model in models_available:
            model = get_model(string_model)
            prediction = model.predict(scaled_url_features)
            read_prediction_string = read_prediction(prediction)

            obj = [string_model, read_prediction_string]

            response.append(obj)
    else:
        model = get_model(selected_model)
        model_prediction = model.predict(scaled_url_features)
        prediction = read_prediction(model_prediction)

        obj = [selected_model, prediction]
        response.append(obj)

    scan_return = {"timestamp": get_timestamp(), "response": response}

    return jsonify(scan_return), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
