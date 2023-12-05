import pickle
import warnings
from sklearn.ensemble import RandomForestClassifier
from utils import MODEL_PATH, CODECARBON_PATH, read_data, is_amd_processor
from codecarbon import EmissionsTracker
warnings.filterwarnings('ignore')


"""
    Train the RandomForest model
    and save the trained RandomForest to a pickle file
"""
def train_base_rf():
    X_train, X_test, y_train, y_test = read_data()
    file_path = MODEL_PATH + "\\base_rf_model.pkl"

    if is_amd_processor():
        emissions_report_file = CODECARBON_PATH + "\\base_model_emissions.xlsx"

        with EmissionsTracker(
            project_name="base_rf_model",
            output_file=emissions_report_file
        ) as tracker:
            tracker.start()

            rf = RandomForestClassifier(random_state=3)
            rf.fit(X_train, y_train)

            tracker.stop()

    rf = RandomForestClassifier(random_state=3)
    rf.fit(X_train, y_train)
    
    with open(file_path, 'wb') as file:
        pickle.dump(rf, file)


if __name__ == '__main__':
    train_base_rf()
