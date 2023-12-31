from urllib.parse import urlparse, urlunparse
import random
import string
import os
import pickle
from pathlib import Path
import sys
import pytest
from sklearn.preprocessing import MinMaxScaler
import os

# Get the absolute path of the directory of your current script
current_script_directory = os.path.dirname(os.path.abspath(__file__))

 # Go to the parent directory
parent_directory = os.path.abspath(os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory)

from src.api.get_features import get_features_all


file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

original_url = "http://www.uspenie.info/component/user/remind.html"
perturbed_url = "http://www.uspenie.com/component/user/remind.html"


def test_perturbed_url_base_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    a, _ = get_features_all(original_url)
    b, _ = get_features_all(perturbed_url)

    original_url_predict = model.predict(a)
    perturbed_url_predict = model.predict(b)

    # Assert that the predictions for both URLs are the same
    assert int(perturbed_url_predict[0]) == int(original_url_predict[0])


def test_perturbed_url_tuned_model():
    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    a, _ = get_features_all(original_url)
    b, _ = get_features_all(perturbed_url)

    original_url_predict = model.predict(a)
    perturbed_url_predict = model.predict(b)

    # Assert that the predictions for both URLs are the same
    assert int(perturbed_url_predict[0]) == int(original_url_predict[0])
