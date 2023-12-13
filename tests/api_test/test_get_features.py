from src.api.get_features import *
import pytest
import sys
import os
from pathlib import Path
import numpy as np

current_script_directory = os.path.dirname(os.path.abspath(__file__))
parent_directory = os.path.abspath(
    os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory)


# Tests for count_dots


def test_count_dots_valid_url():
    assert count_dots("http://www.indeed.com") == 2


def test_count_dots_no_dots():
    assert count_dots("http://localhost") == 0


def test_count_dots_edge_case():
    assert count_dots(
        "http://www.tiendagnulinux.com.ar/calcomanias-en-vinilo?page=shop.browse&category_id=4") == 4

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
    assert count_underscore(
        "http://example.com/path_to/resource_with_more_underscores") == 4


def test_count_underscore_none():
    assert count_underscore("http://example.com") == 0

# Tests for count_percent


def test_count_percent_encoded():
    assert count_percent("http://example.com/path%20with%20spaces") == 2


def test_count_percent_none():
    assert count_percent("http://example.com") == 0

# Tests for count_query_components


def test_count_query_components_multiple():
    assert count_query_components(
        "http://example.com/path?param1=value1&param2=value2") == 2


def test_count_query_components_single():
    assert count_query_components("http://example.com/path?param=value") == 1


def test_count_query_components_none():
    assert count_query_components("http://example.com/path") == 0

# Tests for count_ampersand


def test_count_ampersand_multiple():
    assert count_ampersand(
        "http://example.com/path?param1=value1&param2=value2") == 1


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
    assert get_query_length(
        "http://example.com/path?param1=value1&param2=value2") == 27


def test_get_query_length_long_query():
    long_query = "param=" + "a" * 50
    assert get_query_length(f"http://example.com/path?{long_query}") == 56


def test_get_query_length_no_query():
    assert get_query_length("http://example.com/path") == 0


def test_get_url_features():
    url = "http://example.com/path?param=value"
    features = get_url_features(url)

    # Test each feature
    assert 'numDots' in features and features['numDots'] == 1
    assert 'subdomainLevel' in features and features['subdomainLevel'] == 0
    assert 'pathLevel' in features and features['pathLevel'] == 1
    assert 'urlLength' in features and features['urlLength'] == len(url)
    assert 'numDash' in features and features['numDash'] == 0
    assert 'numUnderscore' in features and features['numUnderscore'] == 0
    assert 'numPercent' in features and features['numPercent'] == 0
    assert 'numQueryComponents' in features and features['numQueryComponents'] == 1
    assert 'numAmpersand' in features and features['numAmpersand'] == 0
    assert 'numDigits' in features and features['numDigits'] == 0
    assert 'https' in features and features['https'] == False
    assert 'ipAddress' in features and features['ipAddress'] == False
    assert 'hostnameLength' in features and features['hostnameLength'] == len(
        "example.com")
    assert 'pathLength' in features and features['pathLength'] == len("/path")
    assert 'queryLength' in features and features['queryLength'] == len(
        "param=value")

    # Test the total number of features
    expected_feature_count = 15
    assert len(
        features) == expected_feature_count, f"Expected {expected_feature_count} features, got {len(features)}"


def test_get_features_all():
    expected_feature_count = 15
    url = "http://example.com/path?param=value"
    features_list, features_dict = get_features_all(url)
    assert isinstance(features_list, list)
    assert isinstance(features_dict, dict)
