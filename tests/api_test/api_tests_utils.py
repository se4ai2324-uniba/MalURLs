import datetime
import time

def compare_dict_values(dict1, dict2):

    if dict1.keys() != dict2.keys():
        return False

    # Compare the values for each key
    for key in dict1:
        if dict1[key] != dict2[key]:
            return False

    return True


def validate_timestamp(timestamp, threshold=60):    
        timestamp_format = "%d-%m-%Y %H:%M:%S"

        # Verify that the timestamp format is correct
        try:
            parsed_timestamp = datetime.datetime.strptime(timestamp, timestamp_format)
        except ValueError:
            raise ValueError("The timestamp format is not valid.")

        # Compare the timestamp with the current time
        current_time = time.time()
        timestamp_time = parsed_timestamp.timestamp()
        if abs(current_time - timestamp_time) > threshold:
            raise ValueError("The timestamp is not within the established time threshold.")

        return True


expected_keys = {
    "numDots": int,
    "numSubdomains": int,
    "pathLevel": int,
    "urlLength": int,
    "numDash": int,
    "numUnderscore": int,
    "numPercent": int,
    "numQueryComponents": int,
    "numAmpersands": int,
    "numDigits": int,
    "https": bool,
    "ipAddress": bool,
    "hostnameLength": int,
    "pathLength": int,
    "queryLength": int
}

# Checks if all expected keys are present in the url_features dictionary.
def check_keys_present(url_features):

    for key in expected_keys:
        if key not in url_features:
            print(f"Key '{key}' is missing in url_features.")
            return False
    return True

# Verifies that the values in the url_features dictionary are of the expected types.


def check_value_types(url_features):

    for key, expected_type in expected_keys.items():
        if not isinstance(url_features[key], expected_type):
            print(
                f"Value for '{key}' is not of type {expected_type.__name__}.")
            return False
    return True
