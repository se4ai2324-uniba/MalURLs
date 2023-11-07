import great_expectations as gx
import pandas as pd

def test_train():
    print("ok")
def test_test_set():
    print("ok")
    
def test_on_url():

    dataset = pd.read_csv("data\\urls_with_features.csv")
    url_dataset = gx.dataset.PandasDataset(dataset)


    # presence of specific features
    url_dataset.expect_table_columns_to_match_ordered_list(
        column_list=["url","numDots","subdomainLevel","pathLevel","urlLength","numDash",
                    "atSymbol","tildeSymbol","numUnderscore","numPercent","numQueryComponents",
                    "numApersand","numHash","numDigits","https","ipAddress","domainInSubdomains",
                    "domainInPaths","httpsInHostname","hostnameLength","pathLength","queryLength",
                    "doubleSlash","type"]
    )

    url_dataset.expect_column_values_to_be_in_set(column="type", value_set=["benign","phishing","malware","defacement","spam"])

    expectation_suite = url_dataset.get_expectation_suite(discard_failed_expectations=False)
    print(url_dataset.validate(expectation_suite=expectation_suite,only_return_failures=True))


def test_on_url_selected_features():

    dataset = pd.read_csv("data\\urls_with_features_selected.csv")
    url_selected = gx.dataset.PandasDataset(dataset)


    # presence of specific features
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

    expectation_suite = url_selected.get_expectation_suite(discard_failed_expectations=False)
    print(url_selected.validate(expectation_suite=expectation_suite,only_return_failures=True))



if __name__ == "__main__":
    test_on_url_selected_features()
    test_on_url()