# -*- coding: utf-8 -*-
from pathlib import Path
import pandas as pd

import warnings
warnings.filterwarnings('ignore')

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
DATA_PATH = PROJECT_PATH + "\\data"


# The function returns the processed feature dataset X.
def make_dataset():
    data = pd.read_csv(DATA_PATH + "\\urls_with_features.csv")
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

    return X


if __name__ == '__main__':
    dataset = make_dataset()
    dataset.to_csv(DATA_PATH + "\\urls_with_features_selected.csv", index=False)
