import os, sys
import pickle
import pandas as pd

# Ottieni il percorso assoluto della directory del tuo script corrente
current_script_directory = os.path.dirname(os.path.abspath(__file__))

# Vai alla directory genitore
parent_directory = os.path.abspath(os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory) 

from src.api.get_features import get_features_all

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

file_dir_csv = os.path.dirname(__file__)
FILE_PATH_CSV = os.path.join(file_dir, "..//../data//test.csv")
test_csv = pd.read_csv(FILE_PATH_CSV)

url_1 = "http://www.pc50.de/index.php?view=article&id=19:internet&tmpl=component&print=1&layout=default&page=&option=com_content&Itemid=47"
url_2 = "http://www.maryahprincess.it/link"


# Randomly select two rows from the test CSV
url_features_1, _ = get_features_all(url_1)
url_features_2, _ = get_features_all(url_2)


def test_on_base_rf_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    prediction_1 = model.predict(url_features_1)
    prediction_2 = model.predict(url_features_2)

    # Assert that the model's predictions match the actual values
    assert int(prediction_1[0]) == 0
    assert int(prediction_2[0]) == 0


def test_on_tuned_rf_model():

    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    prediction_1 = model.predict(url_features_1)
    prediction_2 = model.predict(url_features_2)

    # Assert that the model's predictions match the actual values
    assert int(prediction_1[0]) == 0
    assert int(prediction_2[0]) == 0
