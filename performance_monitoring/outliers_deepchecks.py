from deepchecks.tabular.suites import full_suite
import pandas as pd
from sklearn.model_selection import train_test_split
import os, sys
# Ottieni il percorso assoluto della directory del tuo script corrente
current_script_directory = os.path.dirname(os.path.abspath(__file__))

# Vai alla directory genitore
parent_directory = os.path.abspath(os.path.join(current_script_directory, '..'))
sys.path.append(parent_directory)

from src.api.api_utils import get_model

suite = full_suite()

data = pd.read_csv("..\\data\\urls_with_features_selected.csv")
api_data = pd.read_csv("..\\data\\api_urls.csv")
X = data.loc[:, data.columns != 'type']
y = data['type']
X_api_data = api_data.loc[:, data.columns != 'type']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf_clf = get_model('base_rf')
result = suite.run(train_dataset=X_train , test_dataset=X_test, model=rf_clf)
result.save_as_html('..//reports//deep_checks_report.html')
