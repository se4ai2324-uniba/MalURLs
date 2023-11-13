import os
import pickle
from src.models.utils import read_data

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")


url1 = [0.12,0.05555555555555555,0.05555555555555555,0.08221119773210489,0.0,0.05,0.0,0.2857142857142857,0.25925925925925924,0.021084337349397592,0.0,0.0,0.029166666666666664,0.013245033112582781,0.07204610951008646]
url2 = [0.04,0.0,0.3333333333333333,0.0673281360737066,0.20512820512820512,0.0,0.0,0.0,0.0,0.0391566265060241,1.0,0.0,0.03333333333333334,0.11788079470198676,0.0]

def test_on_base_rf_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    a=[url1, url2]
    print(a)
    predicted_value = model.predict(a)

    assert int(predicted_value[0]) == 1
    assert int(predicted_value[1]) == 0

def test_on_tuned_rf_model():

    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    a=[url1, url2]
    predicted_value = model.predict(a)

    assert int(predicted_value[0]) == 1
    assert int(predicted_value[1]) == 0