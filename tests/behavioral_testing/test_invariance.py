import os
import pytest

file_dir = os.path.dirname(__file__)
FILE_PATH = os.path.join(file_dir, "..//../mlruns")
path = os.listdir(FILE_PATH)
folders_mlruns = [element for element in path if os.path.isdir(os.path.join(FILE_PATH, element))]
folders = []

for i_folder in folders_mlruns:
    if i_folder != ".trash" and i_folder != "models":
        new_path = os.listdir(os.path.join(FILE_PATH, i_folder))
        for element in new_path:
            if os.path.isdir(os.path.join(os.path.join(FILE_PATH, i_folder), element)):
                folders.append(i_folder + "/" + element)

PRECISION = 0.888
RECALL = 0.904
ACCURACY = 0.897
F1 = 0.896


def check_metrics():
    for folder in folders:
        new_file_path = os.path.join(FILE_PATH, folder + "/metrics")
        acc_value = read_metric("/accuracy", new_file_path)
        f1_value = read_metric("/Weighted_avg_f1", new_file_path)
        pr_value = read_metric("/Weighted_avg_precision", new_file_path)
        re_value = read_metric("/Weighted_avg_recall", new_file_path)
        if acc_value != pytest.approx(ACCURACY,abs=0.2):
            return False
        if f1_value != pytest.approx(F1,abs=0.2):
            return False
        if pr_value != pytest.approx(PRECISION,abs=0.2):
            return False
        if re_value != pytest.approx(RECALL,abs=0.2):
            return False
    return True

def read_metric(metric_path, new_file_path):
    line = open(new_file_path + metric_path, "r")
    value = line.readline().split()[1]
    return float(value)

def test_metrics():
    assert check_metrics