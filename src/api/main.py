from flask import Flask, jsonify, request
from get_features import get_url_features, get_scaled_features
from api_utils import get_model, read_prediction

app = Flask(__name__)
models_available = ["base_rf", "tuned_rf"]

@app.route('/', methods = ['GET'])
def main():
    if request.method == 'GET':
        return jsonify({

            "Title" : "MalURLs",
            "Description" : "Welcome to MalURLs, an API to classify URLs",
            "Version" : "1.0",
            "Available endpoints" : ["/get_features", "/models", "/scan"]

        })
    
@app.route('/get_features', methods = ['POST'])
async def get_features():
    if request.method == 'POST':
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
async def scan_url():
    url = request.json.get('url')
    selected_model = request.json.get('model')
    
    if not url or not isinstance(url, str):
        return jsonify({'error': 'URL must be a non-empty string'}), 400
    
    if selected_model not in models_available:
        return jsonify({'error': 'Model should be one of: ' + " ,".join(models_available)}), 400
    
    model = get_model(selected_model)
    scaled_url_features = get_scaled_features(url)
    
    model_prediction = model.predict(scaled_url_features)
    prediction = read_prediction(model_prediction)
    
    return jsonify({
        "prediction": prediction
    }), 200

if __name__ == '__main__':
    app.run(debug=True)