import pickle
import warnings
from sklearn.ensemble import RandomForestClassifier
import sys
import os

# Ottieni il percorso assoluto della directory del tuo script corrente
current_script_directory = os.path.dirname(os.path.abspath(__file__))

# Vai alla directory genitore
parent_directory = os.path.abspath(
    os.path.join(current_script_directory, '../..'))
sys.path.append(parent_directory)


from src.models.utils import MODEL_PATH, CODECARBON_PATH, PROJECT_PATH, read_data, is_amd_processor
from codecarbon import EmissionsTracker
warnings.filterwarnings('ignore')


"""
    Train the RandomForest model
    and save the trained RandomForest to a pickle file
"""
def train_base_rf():
    X_train, X_test, y_train, y_test = read_data()
    file_path = MODEL_PATH + "\\base_rf_model.pkl"
    emissions_report_file = CODECARBON_PATH + "\\base_model_emissions.txt"

    if os.name == 'posix':
        file_path = PROJECT_PATH + "/models/base_rf_model.pkl"
        emissions_report_file = PROJECT_PATH + "/reports/codecarbon/base_model_emissions.txt"
    

    if is_amd_processor():
        

        with EmissionsTracker(
            project_name="base_rf_model",
            output_file=emissions_report_file
        ) as tracker:
            tracker.start()

            rf = RandomForestClassifier(random_state=3)
            rf.fit(X_train, y_train)

            tracker.stop()

    print("Training base model...")
    rf = RandomForestClassifier(random_state=3)
    rf.fit(X_train, y_train)
    
    with open(file_path, 'wb') as file:
        pickle.dump(rf, file)


if __name__ == '__main__':
    train_base_rf()
