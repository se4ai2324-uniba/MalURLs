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

def outlier_detection_retrain():
    data = pd.read_csv(DATA_PATH + "\\urls_with_features_selected.csv")
    api_data = pd.read_csv(DATA_PATH + "\\api_urls.csv")
    X = data.loc[:, data.columns != 'type']
    y = data['type']
    X_api_data = api_data.loc[:, data.columns != 'type']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    detector_name = 'IForest'

    od = IForest(threshold=0.5, n_estimators=100)

    # train
    od.fit(X_train)


    od.infer_threshold(
        X,
        threshold_perc=95
    )

    preds = od.predict(
        X_api_data,
        return_instance_score=True
    )

    y_outlier = api_data['type'].values

    labels = ["normal", "outlier"]

    y_pred = preds['data']['is_outlier']

    f1 = f1 = f1_score(y_outlier, y_pred)

    print('F1 score: {:.4f}'.format(f1))

    cm = confusion_matrix(y_outlier, y_pred)
    df_cm = pd.DataFrame(cm, index=labels, columns=labels)

    """
        Data drift
    """

    cd = KSDrift(X_train.values, p_val=0.05)

    preds = cd.predict(X_api_data.values, drift_type='batch',
                   return_p_val=True, return_distance=True)

    alert_drift = preds['data']['is_drift']
    print(alert_drift)

    if alert_drift == 1:
        import sys

        # Ottieni il percorso assoluto della directory del tuo script corrente
        current_script_directory = os.path.dirname(os.path.abspath(__file__))

        # Vai alla directory genitore
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

        if "GITHUB_OUTPUT" in os.environ :
            with open(os.environ["GITHUB_OUTPUT"], "a") as f :
                print("{0}={1}".format("drift", alert_drift), file=f)

    return alert_drift

if __name__ == '__main__':
    outlier_detection_retrain()
