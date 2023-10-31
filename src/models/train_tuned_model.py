from sklearn.ensemble import RandomForestClassifier
from  utils  import MODEL_PATH, read_data
import pickle
import warnings
warnings.filterwarnings('ignore')

#Train the RandomForest model and save the trained RandomForest to a pickle file
def train_tuned_rf():
    X_train, X_test, y_train, y_test = read_data()

    rf = RandomForestClassifier(
        n_estimators = 3000,
        min_samples_split = 10,
        min_samples_leaf = 1,
        max_depth = 100,
        bootstrap = False
    )
    rf.fit(X_train, y_train)

    file_path = MODEL_PATH + "\\tuned_rf_model.pkl"

    with open(file_path, 'wb') as file:
        pickle.dump(rf, file)


if __name__ == '__main__':
    train_tuned_rf()