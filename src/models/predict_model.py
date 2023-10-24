import joblib
from train_model import read_data
from pathlib import Path
from sklearn.metrics import accuracy_score, classification_report
import json

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
MODEL_PATH = PROJECT_PATH + "\models"

def predict():

    model= joblib.load(MODEL_PATH+"\\model.pkl")
    X_train, X_test, y_train, y_test = read_data()
    y_pred = model.predict(X_test)
    print(classification_report(y_test, y_pred, target_names=['safe_URL', 'unsafe_URL']))
    
    report = classification_report(y_test, y_pred, target_names=['safe_URL', 'unsafe_URL'])
    accuracy = accuracy_score(y_test, y_pred)
    precision = report['weighted avg']['precision']
    recall = report['weighted avg']['recall']
    f1 = report['weighted avg']['f1-score']

    # Create a dictionary to store metrics
    metrics = {
        "accuracy": accuracy,
        "precision": precision,
        "recall": recall,
        "f1_score": f1
    }

    # Define the filename to save the metrics as JSON
    metrics_filename = "random_forest_metrics.json"

    # Write the metrics to a JSON file
    with open(metrics_filename, "w") as json_file:
        json.dump(metrics, json_file, indent=4)

    print(f"Metrics saved to '{metrics_filename}")




if __name__ == '__main__':
    predict()