from flask import Flask, jsonify, request
from get_features import get_url_features, get_scaled_features
from api_utils import get_model, read_prediction, main_page_dict, docs_dict, models_available

app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
    return jsonify(main_page_dict), 200


@app.route('/docs', methods=['GET'])
def get_docs():
    return jsonify(docs_dict), 200
    

@app.route('/get_features', methods=['POST'])
async def get_features():
    url = request.json.get('url')

    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400
        
    features_dict = get_url_features(url)
    return jsonify(features_dict), 200


@app.route('/models', methods=['GET'])
def get_models_available():
    return jsonify({
        "models_available" : models_available
    }), 200


@app.route('/scan', methods=['POST'])
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
    
    return jsonify({
        "prediction": prediction,
        "model_used" : selected_model
    }), 200


@app.route('/scan_all', methods=['POST'])
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

    return jsonify({
        "Base random forest prediction" : prediciton_base,
        "Tuned random forest prediction" : prediction_tuned
    }), 200
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
