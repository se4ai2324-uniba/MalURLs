from pathlib import Path
import pandas as pd
import platform
import os

# get actual project path
PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

DATA_PATH_TEST_INVARIANCE = PROJECT_PATH + "\\data\\test_data_invariance"

# datasets path
DATA_PATH = PROJECT_PATH + "\\data"

# models path
MODEL_PATH = PROJECT_PATH + "\\models"

# mlruns path
MLRUNS_PATH = PROJECT_PATH + "\\mlruns"

# json reports path
REPORT_PATH = PROJECT_PATH + "\\reports"

# code carbon path
CODECARBON_PATH = REPORT_PATH + "\\codecarbon"


def read_data():

    train_file = DATA_PATH + '\\train.csv'
    test_file = DATA_PATH + '\\test.csv'

    if os.name == 'posix':
        train_file = PROJECT_PATH + "/data/train.csv"
        test_file = PROJECT_PATH + "/data/test.csv"


    train_data = pd.read_csv(train_file)
    test_data = pd.read_csv(test_file)

    X_train = train_data.loc[:, train_data.columns != 'type'].values
    y_train = train_data['type'].values

    X_test = test_data.loc[:, test_data.columns != 'type'].values
    y_test = test_data['type'].values

    return X_train, X_test, y_train, y_test


def read_test_invariance_data():
    train_data = pd.read_csv(DATA_PATH + "\\train.csv")
    test_data = pd.read_csv(DATA_PATH_TEST_INVARIANCE + "\\test.csv")

    X_train = train_data.loc[:, train_data.columns != 'type'].values
    y_train = train_data['type'].values

    X_test = test_data.loc[:, test_data.columns != 'type'].values
    y_test = test_data['type'].values

    return X_train, X_test, y_train, y_test

def is_amd_processor():
    try:
        # Ottieni informazioni sulla piattaforma
        system_info = platform.processor()

        # Controlla se il processore è di tipo AMD
        return 'AMD' in system_info
    except Exception as e:
        print(f"Errore durante la verifica del processore AMD: {e}")
        return False
