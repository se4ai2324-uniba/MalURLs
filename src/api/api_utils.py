from pathlib import Path
import pickle
from numpy import ndarray
import os

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

MODEL_PATH = PROJECT_PATH + "\\models"

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
