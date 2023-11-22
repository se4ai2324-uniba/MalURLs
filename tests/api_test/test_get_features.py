import pytest
from src.api.get_features import * 

#Tests for count_dots
def test_count_dots_valid_url():
    assert count_dots("http://www.indeed.com") == 2

def test_count_dots_no_dots():
    assert count_dots("http://localhost") == 0

def test_count_dots_edge_case():
    assert count_dots("http://www.tiendagnulinux.com.ar/calcomanias-en-vinilo?page=shop.browse&category_id=4") == 4

# Tests for count_subdomains
def test_count_subdomains_single():
    assert count_subdomains("http://blog.example.com") == 1

def test_count_subdomains_multiple():
    assert count_subdomains("http://sub1.sub2.example.com") == 2

def test_count_subdomains_none():
    assert count_subdomains("http://example.com") == 0

def test_count_subdomains_www():
    assert count_subdomains("http://www.example.com") == 1

# Tests for get_path_level
def test_get_path_level_multiple():
    assert get_path_level("http://example.com/path/level2") == 2

def test_get_path_level_single():
    assert get_path_level("http://example.com/path") == 1

def test_get_path_level_none():
    assert get_path_level("http://example.com") == 0

def test_get_path_level_trailing_slash():
    assert get_path_level("http://example.com/path/") == 1

# Tests for get_len
def test_get_len_short_url():
    assert get_len("http://ex.com") == 13

def test_get_len_long_url():
    url = "http://example.com/" + "a" * 50
    assert get_len(url) == 69  

# Tests for count_dash
def test_count_dash_multiple():
    assert count_dash("http://example.com/path-level/more-levels") == 2

def test_count_dash_none():
    assert count_dash("http://example.com") == 0

# Tests for count_underscore
def test_count_underscore_multiple():
    assert count_underscore("http://example.com/path_to/resource_with_more_underscores") == 4

def test_count_underscore_none():
    assert count_underscore("http://example.com") == 0

# Tests for count_percent
def test_count_percent_encoded():
    assert count_percent("http://example.com/path%20with%20spaces") == 2

def test_count_percent_none():
    assert count_percent("http://example.com") == 0

# Tests for count_query_components
def test_count_query_components_multiple():
    assert count_query_components("http://example.com/path?param1=value1&param2=value2") == 2

def test_count_query_components_single():
    assert count_query_components("http://example.com/path?param=value") == 1

def test_count_query_components_none():
    assert count_query_components("http://example.com/path") == 0

# Tests for count_ampersand
def test_count_ampersand_multiple():
    assert count_ampersand("http://example.com/path?param1=value1&param2=value2") == 1

def test_count_ampersand_none():
    assert count_ampersand("http://example.com") == 0

# Tests for count_digits
def test_count_digits_multiple():
    assert count_digits("http://example123.com/path123") == 6

def test_count_digits_none():
    assert count_digits("http://example.com") == 0

# Tests for check_Https
def test_check_https_redirect():
    assert check_https("https://example.com") == True 

def test_check_https_no_redirect():
    assert check_https("http://non-https-site.com") == False

# Tests for check_IP_address
def test_check_IP_address_true():
    assert check_ip_address("http://192.168.1.1/path") == True

def test_check_IP_address_false():
    assert check_ip_address("http://example.com") == False

# Tests for get_hostname_length
def test_get_hostname_length_various():
    assert get_hostname_length("http://example.com") == 11
    assert get_hostname_length("http://longerhostname.example.com") == 26

# Tests for get_path_length
def test_get_path_length_various():
    assert get_path_length("http://example.com/path/to/resource") == 17
    assert get_path_length("http://example.com") == 0

# Tests for get_query_length
def test_get_query_length_single_param():
    assert get_query_length("http://example.com/path?param=value") == 11

def test_get_query_length_multiple_params():
    assert get_query_length("http://example.com/path?param1=value1&param2=value2") == 27

def test_get_query_length_long_query():
    long_query = "param=" + "a" * 50
    assert get_query_length(f"http://example.com/path?{long_query}") == 56  

def test_get_query_length_no_query():
    assert get_query_length("http://example.com/path") == 0

def test_get_url_features():
    url = "http://example.com/path?param=value"
    features = get_url_features(url)

    # Test each feature
    assert 'num_dots' in features and features['num_dots'] == 1
    assert 'num_subdomains' in features and features['num_subdomains'] == 0
    assert 'path_level' in features and features['path_level'] == 1
    assert 'url_len' in features and features['url_len'] == len(url)
    assert 'num_dash' in features and features['num_dash'] == 0
    assert 'num_underscore' in features and features['num_underscore'] == 0
    assert 'num_percent' in features and features['num_percent'] == 0
    assert 'num_query_components' in features and features['num_query_components'] == 1
    assert 'num_ampersands' in features and features['num_ampersands'] == 0
    assert 'num_digits' in features and features['num_digits'] == 0
    assert 'is_https' in features  and features['is_https'] == False
    assert 'is_ipaddr' in features and features['is_ipaddr'] == False
    assert 'hostname_length' in features and features['hostname_length'] == len("example.com")
    assert 'path_length' in features and features['path_length'] == len("/path")
    assert 'query_length' in features and features['query_length'] == len("param=value")

    # Test the total number of features
    expected_feature_count = 15
    assert len(features) == expected_feature_count, f"Expected {expected_feature_count} features, got {len(features)}"

def test_get_features_list():
    expected_feature_count = 15
    url = "http://example.com/path?param=value"
    features_list = get_features_list(url)
    assert isinstance(features_list, list)
    assert len(features_list) == expected_feature_count

def test_get_np_features():
    url = "http://example.com/path?param=value"
    np_features = get_np_features(url)
    assert isinstance(np_features, np.ndarray)

def test_get_scaled_features():
    url = "http://example.com/path?param=value"
    expected_feature_count = 15

    scaled_features = get_scaled_features(url)
    assert isinstance(scaled_features, np.ndarray), "The output should be a NumPy array"
    assert scaled_features.shape == (1, expected_feature_count)
