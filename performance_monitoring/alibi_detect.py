import alibi_detect
from pathlib import Path
import numpy as np
import pandas as pd
import alibi
from alibi_detect import TabularDrift


PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
DATA_PATH = PROJECT_PATH + "\\data"

def load_url_dataset():
    data = pd.read_csv(DATA_PATH + "\\urls_with_features_selected.csv")
    X_train = data.loc[:, data.columns != 'type']
    y_train = data['type']
    cd_tabular = TabularDrift(X_train, p_val=.05)
    return X_train, y_train
'''
def train_outlier_detector(X_train, threshold=0.5):
    od = OutlierVAE(threshold=threshold)
    od.fit(X_train)
    return od

def save_detector_to_file(detector, filename='outlier_detector'):
    save_detector(detector, filename)

def load_detector_from_file(filename='outlier_detector'):
    return load_detector(filename)

def predict_outliers(detector, new_data):
    preds = detector.predict(new_data)
    return preds['data']['is_outlier'], preds['data']['instance_score']'''

def main():
    # Load URL dataset
    X_train, y_train = load_url_dataset()

'''Train and save outlier detector
    outlier_detector = train_outlier_detector(X_train)
    save_detector_to_file(outlier_detector)

    # Load saved outlier detector
    loaded_detector = load_detector_from_file()

    # Generate new data for prediction
    new_data = np.random.rand(100, X_train.shape[1])

    # Predict outliers using the loaded detector
    outlier_preds, instance_scores = predict_outliers(loaded_detector, new_data)

    # Print results
    print('Outlier prediction:', outlier_preds)
    print('Instance scores:', instance_scores)'''
if __name__ == "__main__":
    main()