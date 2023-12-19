import pytest
from pathlib import Path
import sys
import os
current_script_directory = os.path.dirname(os.path.abspath(__file__))
sys.path.append(current_script_directory)

from api_tests_utils import compare_dict_values, validate_timestamp, check_keys_present, check_value_types
from src.api.main import app
from src.api.api_utils import main_page_dict, models_available

parent_directory = os.path.abspath(
    os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory)


base_url = 'http://127.0.0.1:5000/'


@pytest.fixture(scope="module")
def client():
    with app.test_client() as client:
        yield client


def test_main_page(client):
    # Send request to the server
    response = client.get('/')

    print(response.json)
    print(main_page_dict)

    assert response.status_code == 200, "Status code should be 200"
    assert compare_dict_values(response.json, main_page_dict)


def test_get_features(client):

    test_url = 'https://apbfiber.com/openme/109212345.exe'

    expected_features = {
        'hostnameLength': 12, 'https': True, 'ipAddress': False,
        'numApersand': 0, 'numDash': 0, 'numDigits': 9, 'numDots': 2,
        'numPercent': 0, 'numQueryComponents': 0, 'subdomainLevel': 0,
        'numUnderscore': 0, 'pathLength': 21, 'pathLevel': 2,
        'queryLength': 0, 'urlLength': 41
    }

    response = client.post('/get_features', json={'url': test_url})

    assert response.status_code == 200, "Status code should be 200"
    url_features = response.json.get('url_features', {})
    assert url_features == expected_features, "URL features do not match expected values"
    assert validate_timestamp(response.json.get('timestamp'))
    assert check_value_types(url_features)
    assert check_keys_present(url_features)


def test_get_models_available(client):
    # Send request to the server
    response = client.get('/models')

    assert response.status_code == 200, "Status code should be 200"

    assert response.json['models_available'] == models_available, "Available models do not match those expected"


def test_scan_benign_url_tuned_model(client):
    data = {'url': 'https://www.google.com/', 'model': 'tuned_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert response.json['response'] == [['tuned_rf', 'benign']]


def test_scan__bening_url_base_model(client):
    data = {'url': 'https://www.google.com/', 'model': 'base_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert response.json['response'] == [['base_rf', 'benign']]


def test_scan_malicious_tuned_model(client):
    data = {'url': 'http://yahoo.com', 'model': 'tuned_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert response.json['response'] == [['tuned_rf', 'malicious']]

def test_scan_malicious_tuned_model(client):
    data = {'url': 'http://yahoo.com', 'model': 'base_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert response.json['response'] == [['tuned_rf', 'malicious']]
