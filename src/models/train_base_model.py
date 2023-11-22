import pickle
import warnings
from sklearn.ensemble import RandomForestClassifier
from  utils  import MODEL_PATH, read_data
warnings.filterwarnings('ignore')


"""
    Train the RandomForest model
    and save the trained RandomForest to a pickle file
"""


def train_base_rf():
    X_train, X_test, y_train, y_test = read_data()

    rf = RandomForestClassifier(random_state=3)
    rf.fit(X_train, y_train)

    file_path = MODEL_PATH + "\\base_rf_model.pkl"

    with open(file_path, 'wb') as file:
        pickle.dump(rf, file)


if __name__ == '__main__':
    train_base_rf()
