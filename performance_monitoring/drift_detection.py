import alibi_detect
alibi_detect.od.__all__
import matplotlib.pyplot as plt
import numpy as np
import os
import pandas as pd
import seaborn as sns
from sklearn.metrics import confusion_matrix, f1_score
from pathlib import Path

from alibi_detect.od import IForest
from alibi_detect.utils.visualize import plot_instance_score, plot_roc
from alibi_detect.cd import KSDrift

from sklearn.model_selection import train_test_split

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[1]))
DATA_PATH = PROJECT_PATH + "\\data"
DRIFT_FILE = "drift.txt"



def detect_drift_and_retrain_models():
    """
    This function performs drift detection for both features and target variables.
    If drift is detected in either, the models are re-trained using the updated data.
    """

    # Load datasets from CSV files
    data = pd.read_csv(DATA_PATH + "\\urls_with_features_selected.csv")
    api_data = pd.read_csv(DATA_PATH + "\\api_urls.csv")
    
    X = data.loc[:, data.columns != 'type']
    y = data['type']

    X_api_data = api_data.loc[:, data.columns != 'type']
    y_api_data = api_data['type']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    """
        Detect data drift
    """
    # Initialize Kolmogorov-Smirnov drift detector for features
    cd = KSDrift(X_train.values, p_val=0.05)

    # Perform drift detection on API data
    preds = cd.predict(X_api_data.values, drift_type='batch',
                   return_p_val=True, return_distance=True)

    alert_drift = preds['data']['is_drift']

    print(alert_drift)

    """
        Detect prediction drift
    """

    # Initialize Kolmogorov-Smirnov drift detector for target variable
    cd_target =  KSDrift(y_train.values, p_val=0.05)

    # Perform drift detection on API target data
    target_preds = cd_target.predict(y_api_data.values, drift_type='batch',
                   return_p_val=True, return_distance=True)
    
    target_alert_drift = target_preds['data']['is_drift']

    print(target_alert_drift)

    if alert_drift == 1 or target_alert_drift == 1:
        import sys

        # Get the absolute path of the directory of your current script
        current_script_directory = os.path.dirname(os.path.abspath(__file__))

        # Go to the parent directory
        parent_directory = os.path.abspath(os.path.join(current_script_directory, '..'))
        sys.path.append(parent_directory)

        from src.features.build_features import split
        from src.models.train_base_model import train_base_rf
        from src.models.train_tuned_model import train_tuned_rf

        api_data.https = api_data.https.replace({True: 1, False: 0})
        api_data.ipAddress = api_data.ipAddress.replace({True: 1, False: 0})

        dataset_retrain = data._append(api_data, ignore_index=True)
        dataset_retrain.to_csv(DATA_PATH + "\\urls_with_features_selected.csv", index=False)

        """
            Train again the model
        """

        split()

        train_base_rf()

        train_tuned_rf()

        # Write drift detection status to a file
        with open(DRIFT_FILE, "w") as d_file:
            d_file.write("1")


    else:
         # Write no drift detected status to a file
        with open(DRIFT_FILE, "w") as d_file:
            d_file.write("0")


    return alert_drift

if __name__ == '__main__':
    
    detect_drift_and_retrain_models()
