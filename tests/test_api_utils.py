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