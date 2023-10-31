import joblib
from utils import MODEL_PATH, REPORT_PATH, read_data
from sklearn.metrics import  classification_report, confusion_matrix
import json
import mlflow
import mlflow.sklearn
import dagshub


report_json_file = REPORT_PATH + "\\classification_report_tuned_rf.json"

report_confusion_matrix = REPORT_PATH + "\\confusion_matrix_tuned_rf.json"

"""
This function trains Random Forest classifier model,
generates a classification report and confusion matrix in json files, 
and logs the results using MLflow.
"""
def predict_evaluate_tuned_rf():

    dagshub.init(repo_owner='se4ai2324-uniba', repo_name='MalURLs', mlflow=True)
    mlflow.autolog()
    mlflow.start_run()

    model = joblib.load(MODEL_PATH+"\\tuned_rf_model.pkl")
    _, X_test, _, y_test = read_data()

    y_pred = model.predict(X_test)

    autolog_run = mlflow.last_active_run()

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
    predict_evaluate_tuned_rf()