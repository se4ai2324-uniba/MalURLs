import os
import pickle
import pandas as pd
import random
from src.models.utils import read_data

file_dir = os.path.dirname(__file__)
FILE_PATH_BASE_MODEL = os.path.join(file_dir, "..//../models/base_rf_model.pkl")
FILE_PATH_TUNED_MODEL = os.path.join(file_dir, "..//../models/tuned_rf_model.pkl")

file_dir_csv = os.path.dirname(__file__)
FILE_PATH_CSV = os.path.join(file_dir, "..//../data//test.csv")
test_csv = pd.read_csv(FILE_PATH_CSV)

r1 = random.randint(0, test_csv.shape[0])
r2 = random.randint(0, test_csv.shape[0])

print(r1, r2)

def test_on_base_rf_model():
    with open(FILE_PATH_BASE_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    a=[x_test[r1], x_test[r2]]
    predicted_value = model.predict(a)
    print(a)
    r1_row=test_csv.iloc[r1]
    r2_row=test_csv.iloc[r2]

    assert int(predicted_value[0]) == int(r1_row["type"]) 
    assert int(predicted_value[1]) == int(r2_row["type"])

def test_on_tuned_rf_model():

    with open(FILE_PATH_TUNED_MODEL, 'rb') as model_file:
        model = pickle.load(model_file)

    _, x_test, _, y_test = read_data()

    a=[x_test[r1], x_test[r2]]
    predicted_value = model.predict(a)

    r1_row=test_csv.iloc[r1]
    r2_row=test_csv.iloc[r2]

    assert int(predicted_value[0]) == int(r1_row["type"]) 
    assert int(predicted_value[1]) == int(r2_row["type"])

test_on_base_rf_model()