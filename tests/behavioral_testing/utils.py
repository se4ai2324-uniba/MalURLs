import pandas as pd
from pathlib import Path

# get actual project path
PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
DATA_PATH_TEST_INVARIANCE = PROJECT_PATH + "\\data\\test_data_invariance"

def read_test_invariance_data():
    train_data = pd.read_csv(DATA_PATH + "\\train.csv")
    test_data = pd.read_csv(DATA_PATH_TEST_INVARIANCE + "\\test.csv")

    X_train = train_data.loc[:, train_data.columns != 'type'].values
    y_train = train_data['type'].values

    X_test = test_data.loc[:, test_data.columns != 'type'].values
    y_test = test_data['type'].values

    return X_train, X_test, y_train, y_test
