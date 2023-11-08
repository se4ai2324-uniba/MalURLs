import great_expectations as gx
import pandas as pd

# tests on the training set 
def test_training_set(train_data):

    train_data.expect_table_columns_to_match_ordered_list(
        column_list=['numDots', 'subdomainLevel', 'pathLevel', 'urlLength', 'numDash',
        'numUnderscore', 'numPercent', 'numQueryComponents', 'numApersand', 'numDigits', 'https',
        'ipAddress', 'hostnameLength', 'pathLength', 'queryLength', 'type'])

    train_data.expect_column_values_to_be_in_set(column="type", value_set=[0,1])

    train_data_expectation_suite = train_data.get_expectation_suite(discard_failed_expectations=False)

    print(train_data.validate(expectation_suite=train_data_expectation_suite,only_return_failures=True))

# tests on the test set
def test_test_set(test_data):

    test_data.expect_table_columns_to_match_ordered_list(
        column_list=['numDots', 'subdomainLevel', 'pathLevel', 'urlLength', 'numDash',
        'numUnderscore', 'numPercent', 'numQueryComponents', 'numApersand', 'numDigits', 'https',
        'ipAddress', 'hostnameLength', 'pathLength', 'queryLength', 'type'])
    
    test_data.expect_column_values_to_be_in_set(column="type", value_set=[0,1])

    test_data_expectation_suite = test_data.get_expectation_suite(discard_failed_expectations=False)
    print(test_data.validate(expectation_suite=test_data_expectation_suite,only_return_failures=True))

# tests on the initial URLs dataset
def test_on_url_dataset(url_dataset):

    url_dataset.expect_table_columns_to_match_ordered_list(
        column_list=["url","numDots","subdomainLevel","pathLevel","urlLength","numDash",
                    "atSymbol","tildeSymbol","numUnderscore","numPercent","numQueryComponents",
                    "numApersand","numHash","numDigits","https","ipAddress","domainInSubdomains",
                    "domainInPaths","httpsInHostname","hostnameLength","pathLength","queryLength",
                    "doubleSlash","type"])

    url_dataset.expect_column_values_to_be_in_set(column="type", value_set=["benign","phishing","malware","defacement","spam"])
    url_dataset.expect_column_values_to_be_between(column="numDots", min_value=0, max_value=None)

    url_dataset_expectation_suite = url_dataset.get_expectation_suite(discard_failed_expectations=False)
    print(url_dataset.validate(expectation_suite=url_dataset_expectation_suite,only_return_failures=True))

# tests on the preprocessed URLs dataset
def test_on_url_features_selected(url_selected):

    url_selected.expect_table_columns_to_match_ordered_list(
        column_list=['numDots', 'subdomainLevel', 'pathLevel', 'urlLength', 'numDash',
        'numUnderscore', 'numPercent', 'numQueryComponents', 'numApersand', 'numDigits', 'https',
        'ipAddress', 'hostnameLength', 'pathLength', 'queryLength', 'type']
    )

    url_selected.expect_column_values_to_not_be_null(column="type")

    url_selected.expect_column_values_to_be_in_set(column="type", value_set=[0,1])
    url_selected.expect_column_values_to_be_in_set(column="https", value_set=[0,1])
    url_selected.expect_column_values_to_be_in_set(column="ipAddress", value_set=[0,1])

    url_selected.expect_column_values_to_be_between(column="numDots", min_value=0, max_value=None)
    url_selected.expect_column_values_to_be_between(column="urlLength", min_value=10, max_value=None)
    url_selected.expect_column_values_to_be_between(column="hostnameLength", min_value=3, max_value=253)

    url_features_selected_expectation_suite = url_selected.get_expectation_suite(discard_failed_expectations=False)
    print(url_selected.validate(expectation_suite=url_features_selected_expectation_suite,only_return_failures=True))


if __name__ == "__main__":

    url_set = pd.read_csv("data\\urls_with_features.csv")
    gx_url_dataset = gx.dataset.PandasDataset(url_set)

    urls_feature_selected_set = pd.read_csv("data\\urls_with_features_selected.csv")
    gx_urls_feature_selected_set = gx.dataset.PandasDataset(urls_feature_selected_set)

    train_set = pd.read_csv("data\\train.csv")
    gx_train_data = gx.dataset.PandasDataset(train_set)

    test_set = pd.read_csv("data\\test.csv")
    gx_test_data = gx.dataset.PandasDataset(test_set)

    test_on_url_dataset(gx_url_dataset)
    test_on_url_features_selected(gx_urls_feature_selected_set)
    test_training_set(gx_train_data)
    test_test_set(gx_test_data)