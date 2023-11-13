import requests
import pytest
from pathlib import Path
import sys

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
sys.path.append(PROJECT_PATH)

from src.api.main import app
from src.api.api_utils import main_page_dict, docs_dict, models_available

base_url = 'http://127.0.0.1:5000/'  # Update with your actual base URL


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_main_page(client):
    response = client.get('/')
    assert response.status_code == 200
    assert response.json == {"main_page_dict": main_page_dict}


def test_get_docs(client):
    response = client.get('/docs')
    assert response.status_code == 200
    assert response.json == {"docs_dict": docs_dict}


def test_get_features(client):
    # Your test data
    data = {'url': 'https://apbfiber.com/openme/109212345.exe'}

    response = client.post('/get_features', json=data)
    assert response.status_code == 200
    assert 'features' in response.json  # Adjust based on your expected response


def test_get_models_available(client):
    response = client.get('/models')
    assert response.status_code == 200
    # Adjust based on your expected response
    assert 'models_available' in response.json
    assert response.json['models_available'] == models_available


def test_scan(client):
    # Your test data
    data = {'url': 'http://example.com/', 'model': 'base_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200
    assert 'prediction' in response.json  # Adjust based on your expected response


def test_scan_all(client):
    # Your test data
    data = {'url': 'http://example.com%27%7D/'}

    response = client.post('/scan_all', json=data)
    assert response.status_code == 200
    # Adjust based on your expected response
    assert 'Base random forest prediction' in response.json
