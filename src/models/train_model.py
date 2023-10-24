from sklearn.ensemble import RandomForestClassifier
from pathlib import Path
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd

import warnings
warnings.filterwarnings('ignore')

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
DATA_PATH = PROJECT_PATH + "\data"

def read_data():
    train_data = pd.read_csv(DATA_PATH + "\\train.csv")
    test_data = pd.read_csv(DATA_PATH + "\\test.csv")

    X_train = train_data.loc[:, train_data.columns != 'type'].values
    y_train = train_data['type'].values

    X_test = test_data.loc[:, test_data.columns != 'type'].values
    y_test = test_data['type'].values


    return X_train, X_test, y_train, y_test

def train_rf():
    X_train, X_test, y_train, y_test = read_data()

    rf = RandomForestClassifier(random_state=3)
    rf.fit(X_train, y_train)

    pred = rf.predict(X_test)

    print(classification_report(y_test, pred, target_names=['safe_URL', 'unsafe_URL']))

    



if __name__ == '__main__':
    train_rf()