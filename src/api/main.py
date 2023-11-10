from flask import Flask, jsonify, request
from get_features import get_url_features

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def main():
    if request.method == 'GET':
        return jsonify({

            "Title" : "MalURLs",
            "Description" : "Welcome to MalURLs, an API to classify URLs",
            "Version" : "1.0"

        })
    
@app.route('/get_features', methods = ['GET', 'POST'])
def get_features():
    if request.method == 'POST':
        url = request.json.get('url')

        if not url or not isinstance(url, str):
            return jsonify({'error': 'URL must be a non-empty string'}), 400
        
        features_dict = get_url_features(url)

        return jsonify(features_dict), 200

@app.route('/models', methods=['GET'])
def get_models_available():
    return jsonify({
        "models_available" : ["base random forest model", "tuned random forest model"]
    })

@app.route('/models/base_rf', methods=['GET', 'POST'])
def get_base_rf_prediction():
    if request.method == 'POST':
        url = request.json.get('url')

        if not url or not isinstance(url, str):
            return jsonify({'error': 'URL must be a non-empty string'}), 400
        
        # add code to load model and get prediction
        prediction = 1

        return jsonify({
            "prediction" : prediction
        })


@app.route('/models/tuned_rf', methods=['GET', 'POST'])
def get_tuned_rf_prediction():
    if request.method == 'POST':
        url = request.json.get('url')

        if not url or not isinstance(url, str):
            return jsonify({'error': 'URL must be a non-empty string'}), 400

        # add code to load model and get prediction
        prediction = 1

        return jsonify({
            "prediction": prediction
        })


if __name__ == '__main__':
    app.run(debug=True)