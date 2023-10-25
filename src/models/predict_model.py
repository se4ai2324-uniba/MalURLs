import joblib
from train_model import read_data
from pathlib import Path
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import json
import mlflow
import mlflow.sklearn

PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))
MODEL_PATH = PROJECT_PATH + "\models"
REPORT_PATH = PROJECT_PATH + "\\reports"

report_json_file = REPORT_PATH + "\\classification_report.json"
report_confusion_matrix = REPORT_PATH + "\\confusion_matrix.json"

def predict_evaluate():

    mlflow.start_run()

    mlflow.log_params({"random_state" : 3, 
                       "algorithm_type" : "Random Forest classifier"})

    model = joblib.load(MODEL_PATH+"\\model.pkl")
    X_train, X_test, y_train, y_test = read_data()

    y_pred = model.predict(X_test)
    report = classification_report(y_test, y_pred, target_names=['safe_URL', 'unsafe_URL'], output_dict=True)
    confusion_matrix_report = confusion_matrix(y_test, y_pred)

  
    mlflow.log_artifact(str(MODEL_PATH))
    mlflow.log_metrics(
        {
            "accuracy": report["accuracy"],
            "Weighted_avg_precision" : report["weighted avg"]["precision"],
            "Weighted_avg_recall" : report["weighted avg"]["recall"],
            "Weighted_avg_f1" : report["weighted avg"]["f1-score"],

        }
    )

    # Save the classification report to a JSON file
    classification_report_json = json.dumps(report, indent=4)
    with open(report_json_file, "w") as report_file:
        report_file.write(classification_report_json)

       
    # Save the confusion matrix report to a JSON file
    confusion_matrix_dict = {"confusion_matrix": confusion_matrix_report.tolist()}
    confusion_matrix_json = json.dumps(confusion_matrix_dict, indent=4)
    with open(report_confusion_matrix, "w") as confusion_matrix_file:
        confusion_matrix_file.write(confusion_matrix_json)
        
    mlflow.end_run()

if __name__ == '__main__':
    predict_evaluate()