from datetime import datetime
from pathlib import Path
import pickle
from numpy import ndarray
import os

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

MODEL_PATH = PROJECT_PATH + "\\models"

models_available = ["base_rf", "tuned_rf"]

main_page_dict = {
    "Title": "MalURLs",
    "Description": "Welcome to MalURLs, an API to classify URLs",
    "Version": "1.0",
    "Available endpoints": ["/get_features", "/models", "/scan", "/scan_all", "/docs"]
}

docs_dict = {
    "/get_features": {
        "description": "Returns a list of the 15 features extracted from input URL",
        "methods_allowed": "POST",
        "body_type": "json",
        "body_parameters": {
            "url": "url_to_get_features"
        },
        "output": {
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
    "/models": {
        "description": "Returns a list of models available",
        "methos_allowed": "GET",
        "output": {
            "models_available": " ,".join(models_available)
        }
    },
    "/scan": {
        "description": "Returns a classification of the input URL using one model",
        "methods_allowed": "POST",
        "body_type": "json",
        "body_parameters": {
            "url": "url_to_get_features",
            "model": "selected model, can be: " + " ,".join(models_available)
        },
        "output": {
            "prediction": "malcious/ benign",
            "model_used": "base_rf_model/ tuned_rf_model",
            "timestamp": "timestamp string in format day-month-year hour-minutes-seconds"
        }
    },
    "/scan_all": {
        "description": "Returns a classification of the input URL using all models available",
        "methods_allowed": "POST",
        "body_type": "json",
        "body_parameters": {
            "url": "url_to_get_features"
        },
        "output": {
            "Base random forest prediction": "prediciton_base",
            "Tuned random forest prediction": "prediction_tuned",
            "timestamp": "timestamp string in format day-month-year hour-minutes-seconds"
        }
    }
}


def get_timestamp():
    return datetime.now().strftime("%d-%m-%Y %H:%M:%S")

def get_model_path():
    if os.name == 'posix':
        return '/app/models/'
    
    return MODEL_PATH + "\\"

def get_model(selected_model: str):
    model = None

    if selected_model == "base_rf":
        with open(get_model_path()+"base_rf_model.pkl", "rb") as base_rf_file:
            model = pickle.load(base_rf_file, fix_imports=False)

    if selected_model == "tuned_rf":
        with open(get_model_path()+"tuned_rf_model.pkl", "rb") as tuned_rf_file:
            model = pickle.load(tuned_rf_file, fix_imports=False)

    return model

def read_prediction(model_prediction : ndarray):
    prediction = float(model_prediction[0])

    if prediction == 1.0:
        return "malicious"
   
    if prediction == 0.0:
        return "benign"
