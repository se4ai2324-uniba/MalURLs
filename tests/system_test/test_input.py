import pandas as pd
import os

file_dir = os.path.dirname(__file__)

FILE_PATH = os.path.join(file_dir, "..//../data//urls_with_features.csv")
TYPE_LINK = ["benign", "defacement", "phishing", "malware", "spam"]

def check_input():
    uwf = pd.read_csv(FILE_PATH, skiprows=[0])
    for index, row in uwf.iterrows():
        if len(row) != 24:
            return False
        if not row[-1] in TYPE_LINK:
            return False
    return True

def test_input():
    assert check_input