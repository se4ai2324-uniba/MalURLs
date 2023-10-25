from sklearn.ensemble import RandomForestClassifier
from pathlib import Path
import pandas as pd
import pickle
import warnings
warnings.filterwarnings('ignore')

# get actual project path
PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

DATA_PATH = PROJECT_PATH + "\data"

MODEL_PATH = PROJECT_PATH + "\models"

def read_data():
    train_data = pd.read_csv(DATA_PATH + "\\train.csv")
    test_data = pd.read_csv(DATA_PATH + "\\test.csv")

    X_train = train_data.loc[:, train_data.columns != 'type'].values
    y_train = train_data['type'].values

    X_test = test_data.loc[:, test_data.columns != 'type'].values
    y_test = test_data['type'].values
    
    return X_train, X_test, y_train, y_test


#Train the RandomForest model and save the trained RandomForest to a pickle file
def train_rf():
    X_train, X_test, y_train, y_test = read_data()

    rf = RandomForestClassifier(random_state=3)
    rf.fit(X_train, y_train)

    file_path = MODEL_PATH + "\\model.pkl"

    with open(file_path, 'wb') as file:
        pickle.dump(rf, file)


if __name__ == '__main__':
    train_rf()