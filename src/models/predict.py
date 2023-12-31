import json
import joblib
from utils import MODEL_PATH, MLRUNS_PATH, REPORT_PATH, read_data, read_test_invariance_data
from sklearn.metrics import classification_report, confusion_matrix
import mlflow
import mlflow.sklearn
import dagshub

"""
    Default, Invariance Testing,
    Directional Testing,
    Minimum Functionality Testing
"""

EXPERIMENT_NAME = "Default"


def create_report_file(report, report_file: str):

    report_json_file = REPORT_PATH + "\\" + report_file

    # Save the classification report to a JSON file
    classification_report_json = json.dumps(report, indent=4)

    with open(report_json_file, "w") as report_file:
        report_file.write(classification_report_json)


def create_confusion_matrix_file(confusion_matrix, confusion_matrix_file: str):

    report_confusion_matrix = REPORT_PATH + "\\" + confusion_matrix_file

    # Save the confusion matrix report to a JSON file
    confusion_matrix_dict = {"confusion_matrix": confusion_matrix.tolist()}
    confusion_matrix_json = json.dumps(confusion_matrix_dict, indent=4)

    with open(report_confusion_matrix, "w") as confusion_matrix_file:
        confusion_matrix_file.write(confusion_matrix_json)


if __name__ == '__main__':
    dagshub.init(repo_owner='se4ai2324-uniba', repo_name='MalURLs', mlflow=True)
    mlflow.autolog()
    mlflow.sklearn.autolog(registered_model_name="base_rf_model")
    mlflow.set_tracking_uri("file:///"+MLRUNS_PATH)
    mlflow.set_experiment(EXPERIMENT_NAME)
    experiment = mlflow.get_experiment_by_name(EXPERIMENT_NAME)
    mlflow.start_run(experiment_id=experiment.experiment_id)

    base_rf_model = joblib.load(MODEL_PATH+"\\base_rf_model.pkl")
    mlflow.set_tag("model_type", "random_forest_base_model")

    if EXPERIMENT_NAME == "Default":
        _, X_test, _, y_test = read_data()
    elif EXPERIMENT_NAME == "Invariance Testing":
        _, X_test, _, y_test = read_test_invariance_data()

    y_pred_base = base_rf_model.predict(X_test)

    report = classification_report(y_test, y_pred_base,
        target_names=['safe_URL', 'unsafe_URL'], output_dict=True)

    confusion_matrix_report = confusion_matrix(y_test, y_pred_base)

    mlflow.log_metrics(
        {
            "accuracy": report["accuracy"],
            "Weighted_avg_precision": report["weighted avg"]["precision"],
            "Weighted_avg_recall": report["weighted avg"]["recall"],
            "Weighted_avg_f1": report["weighted avg"]["f1-score"],
        }
    )

    mlflow.register_model("runs:/"+mlflow.active_run().info.run_id+"/models", "base_rf_model")

    create_report_file(report, "classification_report_base_rf.json")
    create_confusion_matrix_file(confusion_matrix_report, "confusion_matrix_base_rf.json")

    # run del secondo modello
    with mlflow.start_run(nested=True):
        tuned_rf_model = joblib.load(MODEL_PATH+"\\tuned_rf_model.pkl")
        mlflow.autolog()
        mlflow.sklearn.autolog(registered_model_name="tuned_rf_model")

        mlflow.set_tag("model_type", "random_forest_tuned_model")

        y_pred_tuned = tuned_rf_model.predict(X_test)

        report = classification_report(y_test, y_pred_tuned,
            target_names=['safe_URL', 'unsafe_URL'], output_dict=True)

        confusion_matrix_report = confusion_matrix(y_test, y_pred_tuned)

        mlflow.register_model("runs:/"+mlflow.active_run().info.run_id+"/models", "tuned_rf_model")

        mlflow.log_metrics(
            {
                "accuracy": report["accuracy"],
                "Weighted_avg_precision": report["weighted avg"]["precision"],
                "Weighted_avg_recall": report["weighted avg"]["recall"],
                "Weighted_avg_f1": report["weighted avg"]["f1-score"],
            }
        )

        create_report_file(report, "classification_report_tuned_rf.json")
        create_confusion_matrix_file(confusion_matrix_report, "confusion_matrix_tuned_rf.json")

    mlflow.end_run()
