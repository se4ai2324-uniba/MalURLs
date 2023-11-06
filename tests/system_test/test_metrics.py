import os
import pytest

file_dir = os.path.dirname(__file__)
FILE_PATH = os.path.join(file_dir, "..//../mlruns//0")
path = os.listdir(FILE_PATH)
folders = [element for element in path if os.path.isdir(os.path.join(FILE_PATH, element))]

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
        if acc_value != pytest.approx(ACCURACY,abs=0.1):
            return False
        if f1_value != pytest.approx(F1,abs=0.1):
            return False
        if pr_value != pytest.approx(PRECISION,abs=0.1):
            return False
        if re_value != pytest.approx(RECALL,abs=0.1):
            return False
    return True

def read_metric(metric_path, new_file_path):
    line = open(new_file_path + metric_path, "r")
    value = line.readline().split()[1]
    return float(value)

def test_metrics():
    assert check_metrics
