import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split
import numpy as np
import warnings

from sklearn.preprocessing import MinMaxScaler
warnings.filterwarnings('ignore')

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

DATA_PATH = PROJECT_PATH + "\\data"


''' 
Split and scale dataset with selected features in train and test
and save in .csv files
'''


def split():
    data = pd.read_csv(DATA_PATH + "\\urls_with_features_selected.csv")
    X = data.loc[:, data.columns != 'type']
    y = data['type']

    scaler = MinMaxScaler()

    X_scal = X
    for c in X_scal:
        if c != 'ipAddress' or c != 'https':
            X_scal[[c]] = scaler.fit_transform(X_scal[[c]])

    X = X_scal

    X_train, X_test, y_train, y_test = train_test_split(
        X.values.astype('float64'),
        y.values.astype('float64'),
        train_size=.8,
        test_size=.2,
        random_state=2,
        shuffle=True,
        stratify=y)

    header_features = ['numDots', 'subdomainLevel', 'pathLevel',
                       'urlLength', 'numDash', 'numUnderscore', 
                       'numPercent', 'numQueryComponents', 'numApersand',
                       'numDigits', 'https', 'ipAddress', 'hostnameLength',
                       'pathLength', 'queryLength', 'type']

    train = np.column_stack((X_train, y_train))
    pd.DataFrame(train, columns=header_features).to_csv(DATA_PATH +'\\train.csv', index=False)

    test = np.column_stack((X_test, y_test))
    pd.DataFrame(test, columns=header_features).to_csv(DATA_PATH +'\\test.csv', index=False)

if __name__== '__main__':
    split()
