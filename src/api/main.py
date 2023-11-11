from flask import Flask, jsonify, request
from get_features import get_url_features, get_scaled_features
from api_utils import get_model, read_prediction

app = Flask(__name__)
models_available = ["base_rf", "tuned_rf"]

@app.route('/', methods = ['GET'])
def main():
    return jsonify({
        "Title" : "MalURLs",
        "Description" : "Welcome to MalURLs, an API to classify URLs",
        "Version" : "1.0",
        "Available endpoints" : ["/get_features", "/models", "/scan", "/scan_all", "/docs"]
    }), 200

@app.route('/docs', methods=['GET'])
def get_docs():
    return jsonify({
        "/get_features":{
            "description" : "Returns a list of the 15 features extracted from input URL",
            "methods_allowed" : "POST",
            "body_type" : "json",
            "body_parameters":{
                "url" : "url_to_get_features"
            },
            "output" : {
                "num_dots": "num_dots ,int",
                "num_subdomains": "num_subdomains ,int",
                "path_level": "path_level ,int",
                "url_len": "url_len ,int",
                "num_dash": "num_dash ,int",
                "num_underscore": "num_underscore ,int",
                "num_percent": "num_percent ,int",
                "num_query_components": "num_query_components ,int",
                "num_ampersands": "num_ampersands ,int",
                "num_digits": "num_digits ,int",
                "is_https": "is_https ,int",
                "is_ipaddr": "is_ipaddr ,int",
                "hostname_length": "hostname_length ,int",
                "path_length": "path_length ,int",
                "query_length": "query_length ,int"
            }
        },
        "/models":{
            "description" : "Returns a list of models available",
            "methos_allowed" : "GET",
            "output" : {
                "models_available" : " ,".join(models_available)
            }
        },
        "/scan":{
            "description": "Returns a classification of the input URL using one model",
            "methods_allowed": "POST",
            "body_type": "json",
            "body_parameters": {
                "url": "url_to_get_features",
                "model" : "selected model, can be: " + " ,".join(models_available)
            },
            "output" : {
                "prediction": "malcious/ benign",
                "model_used": "base_rf_model/ tuned_rf_model"
            }
        },
        "/scan_all":{
            "description": "Returns a classification of the input URL using all models available",
            "methods_allowed": "POST",
            "body_type": "json",
            "body_parameters": {
                "url": "url_to_get_features"
            },
            "output" : {
                "Base random forest prediction": "prediciton_base",
                "Tuned random forest prediction": "prediction_tuned"
            }
        }
    }), 200
    
@app.route('/get_features', methods = ['POST'])
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
