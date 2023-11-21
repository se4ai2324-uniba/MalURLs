from urllib.parse import urlparse, urlunparse
import random
import string
import os
import pickle
from src.api.get_features import get_scaled_features
import pytest

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

def perturbate_url(url):
    # Parse the URL into components
    parsed_url = urlparse(url)

    # Extract components
    scheme, netloc, path, params, query, fragment = parsed_url

    # Perturb the netloc (domain)
    perturbed_netloc = ''.join(random.choice(
        string.ascii_letters) for _ in range(len(netloc)))

    # Create a new perturbed URL
    perturbed_url = urlunparse(
        (scheme, perturbed_netloc, path, params, query, fragment))

    return perturbed_url

def test_perturbed_url():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)
    
    original_url = "http://anvari.co/index.php?option=com_content&view=article&id=1099&Itemid=681"

    perturbed_url = perturbate_url(original_url)

    perturbed_url_predict = model.predict(get_scaled_features(perturbed_url))

    assert int(perturbed_url_predict[0]) == 1
