import os
from datetime import datetime
from pathlib import Path
import pickle
from numpy import ndarray

"""
    This module contains utility functions for flask API
"""

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

MODEL_PATH = PROJECT_PATH + "\\models"

models_available = ["base_rf", "tuned_rf"]

main_page_dict = {
    "Title": "MalURLs",
    "Description": "Welcome to MalURLs, an API to classify URLs",
    "Version": "1.0",
    "Available endpoints": ["/get_features", "/models",
                            "/scan", "/scan_all", "/docs"]
}

"""
    Get the timestamp
"""

def get_timestamp():
    return datetime.now().strftime("%d-%m-%Y %H:%M:%S")


"""
Get the model path
"""


def get_model_path():
    if os.name == 'posix':
        return '/app/models/'

    return MODEL_PATH + "\\"


"""
    Get the model path
"""


def get_model(selected_model: str):
    model = None

    if selected_model == "base_rf":
        with open(get_model_path()+"base_rf_model.pkl", "rb") as base_rf_file:
            model = pickle.load(base_rf_file, fix_imports=False)

    if selected_model == "tuned_rf":
        with open(get_model_path()+"tuned_rf_model.pkl", "rb") as tuned_rf_file:
            model = pickle.load(tuned_rf_file, fix_imports=False)

    return model


"""
    Read the prediction
"""


def read_prediction(model_prediction: ndarray):
    prediction = float(model_prediction[0])

    return_prediction = "benign"

    if prediction == 1.0:
        return_prediction = "malicious"

    return return_prediction
