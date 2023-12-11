import os
import sys
import pickle

from utils import read_test_invariance_data
from sklearn.metrics import  classification_report
import pytest

# Ottieni il percorso assoluto della directory del tuo script corrente
current_script_directory = os.path.dirname(os.path.abspath(__file__))

# Vai alla directory genitore
parent_directory = os.path.abspath(os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory)

from src.api.get_features import get_features_list
from src.models.utils import read_data

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

PRECISION = 0.888
RECALL = 0.904
ACCURACY = 0.897
F1 = 0.896

# URLs to test
url1 = "http://www.pc50.de/index.php?view=article&id=19:internet&tmpl=component&print=1&layout=default&page=&option=com_content&Itemid=47"
url2 = "https://google.it"


def test_on_base_rf_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    url1_scaled = get_features_list(url1)
    url2_scaled = get_features_list(url2)


    predicted_value1 = model.predict([url1_scaled])
    predicted_value2 = model.predict([url2_scaled])

    assert int(predicted_value1[0]) == 0
    assert int(predicted_value2[0]) == 1

def test_on_tuned_rf_model():

    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    url1_scaled = get_features_list(url1)
    url2_scaled = get_features_list(url2)

    predicted_value1 = model.predict([url1_scaled])
    predicted_value2 = model.predict([url2_scaled])

    assert int(predicted_value1[0]) == 0
    assert int(predicted_value2[0]) == 1

# Function to test the base Random Forest model with shuffled data
def shuffle_on_base_rf_model():
    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_test_invariance_data()
    y_pred_tuned = model.predict(x_test)
    
    report = classification_report(y_test, y_pred_tuned, target_names=['safe_URL', 'unsafe_URL'], output_dict=True)
   
    assert check_metrics(report['weighted avg']['precision'],
          report['weighted avg']['recall'], 
          report['weighted avg']['f1-score'], 
          report['accuracy'])

# Function to test the tuned Random Forest model with shuffled data
def shuffle_on_tuned_rf_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_test_invariance_data()
    y_pred_tuned = model.predict(x_test)
    
    report = classification_report(y_test, y_pred_tuned, target_names=['safe_URL', 'unsafe_URL'], output_dict=True)
   
    assert check_metrics(report['weighted avg']['precision'],
          report['weighted avg']['recall'], 
          report['weighted avg']['f1-score'], 
          report['accuracy'])


def check_metrics(pr_value, re_value, f1_value, acc_value):

    if acc_value != pytest.approx(ACCURACY,abs=0.2):
        return False
    if f1_value != pytest.approx(F1,abs=0.2):
        return False
    if pr_value != pytest.approx(PRECISION,abs=0.2):
        return False
    if re_value != pytest.approx(RECALL,abs=0.2):
        return False
    return True