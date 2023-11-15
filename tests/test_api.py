import pytest
from pathlib import Path
import sys

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
sys.path.append(PROJECT_PATH)

from src.api.main import app
from src.api.api_utils import main_page_dict, docs_dict, models_available
from tests.test_api_utils import compare_dict_values, validate_timestamp

base_url = 'http://127.0.0.1:5000/'  


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_main_page(client):
    response = client.get('/')
    print(response.json)
    print(main_page_dict)
    

    assert response.status_code == 200, "Status code should be 200"
    assert compare_dict_values(response.json, main_page_dict)



def test_get_docs(client):
    response = client.get('/docs')
    assert response.status_code == 200, "Status code should be 200"
    assert compare_dict_values(response.json, docs_dict)


def test_get_features(client):
  
    test_url = 'https://apbfiber.com/openme/109212345.exe'
    expected_features = {
        'hostname_length': 12, 'is_https': True, 'is_ipaddr': False,
        'num_ampersands': 0, 'num_dash': 0, 'num_digits': 9, 'num_dots': 2,
        'num_percent': 0, 'num_query_components': 0, 'num_subdomains': 0,
        'num_underscore': 0, 'path_length': 21, 'path_level': 2,
        'query_length': 0, 'url_len': 41
    }

    response = client.post('/get_features', json={'url': test_url})

    assert response.status_code == 200, "Status code should be 200"
    url_features = response.json.get('url_features', {})
    assert url_features == expected_features, "URL features do not match expected values"
    assert  validate_timestamp(response.json.get('timestamp'))



def test_get_models_available(client):
    response = client.get('/models')
    assert response.status_code == 200, "Status code should be 200"
    
    assert response.json['models_available'] == models_available, "Available models do not match those expected"


def test_scan(client):
    data = {'url': 'http://king-county-dui-lawyer.com/', 'model': 'tuned_rf'}

    response = client.post('/scan', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert 'prediction' in response.json  
    assert response.json['prediction'] == 'malicious', f"Url: {data['url']} classified as {response.json['prediction']}"
    assert response.json['model_used'] == 'tuned_rf'


def test_scan_all(client):
    
    data = {'url': 'http://example.com%27%7D/'}

    response = client.post('/scan_all', json=data)
    assert response.status_code == 200, "Status code should be 200"
    assert response.json['Base random forest prediction'] == 'malicious'
    assert response.json['Tuned random forest prediction'] == 'malicious'
    assert validate_timestamp(response.json.get('timestamp'))