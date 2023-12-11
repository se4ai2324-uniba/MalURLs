from urllib.parse import urlparse, urlunparse
import random
import string
import os
import pickle
from pathlib import Path
import sys

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
sys.path.append(PROJECT_PATH)

from src.api.get_features import get_scaled_features
import pytest

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

original_url = "http://www.uspenie.info/component/user/remind.html"
perturbed_url = "http://www.uspenie.com/component/user/remind.html"

def test_perturbed_url_base_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)
    
    original_url_predict = model.predict(get_scaled_features(original_url))
    perturbed_url_predict = model.predict(get_scaled_features(perturbed_url))

    # Assert that the predictions for both URLs are the same
    assert int(perturbed_url_predict[0]) == int(original_url_predict[0])

def test_perturbed_url_tuned_model():
    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)
    
    original_url_predict = model.predict(get_scaled_features(original_url))
    perturbed_url_predict = model.predict(get_scaled_features(perturbed_url))

    # Assert that the predictions for both URLs are the same
    assert int(perturbed_url_predict[0]) == int(original_url_predict[0])
