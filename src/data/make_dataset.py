# -*- coding: utf-8 -*-
from pathlib import Path
import pandas as pd
import os
import warnings
warnings.filterwarnings('ignore')

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
data_file = PROJECT_PATH + "\\data\\urls_with_features.csv"
data_output_file = DATA_PATH + "\\urls_with_features_selected.csv"


# The function returns the processed feature dataset X.
def make_dataset():

    if os.name == 'posix':
        data_file = PROJECT_PATH + "/data/urls_with_features.csv"
        data_output_file = PROJECT_PATH + "/data/urls_with_features_selected.csv"

    data = pd.read_csv(data_file)
    selected_features = ['numDots', 'subdomainLevel', 'pathLevel', 'urlLength', 'numDash',
                         'numUnderscore', 'numPercent', 'numQueryComponents', 
                         'numApersand', 'numDigits', 'https', 'ipAddress', 'hostnameLength', 
                         'pathLength', 'queryLength']

    X = data[selected_features]
    X.https = X.https.replace({True: 1, False: 0})
    X.ipAddress = X.ipAddress.replace({True: 1, False: 0})

    y = data[['type']]
    y.loc[y['type'] != 'benign', 'type'] = 1
    y.loc[y['type'] == 'benign', 'type'] = 0

    X['type'] = y

    X.to_csv(data_output_file, index=False)


if __name__ == '__main__':
   make_dataset()