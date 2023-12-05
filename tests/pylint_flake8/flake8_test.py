import subprocess
from pathlib import Path
import os


PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

FLAKE8_REPORT_PATH = PROJECT_PATH + "\\tests\\docs\\flake8_reports"

def run_flake8(file_path):
    command = ['flake8', file_path]
    result = subprocess.run(command, stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE, text=True)
    return result.stdout

def list_python_files(folder_path):
    python_files = []
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.py') and file != '__init__.py':
                python_files.append(os.path.join(root, file))
    return python_files



def write_flake8_report(flake8_report, source_file_name : str):
    report_name = "flake8_" + os.path.splitext(os.path.basename(source_file_name))[0]
    report_file = FLAKE8_REPORT_PATH + "\\" + report_name + ".txt"

    with open(report_file, "w") as flake8_report_file:
        flake8_report_file.write(flake8_report)

    flake8_report_file.close()



if __name__ == '__main__':
    code_directory = PROJECT_PATH + "\\src"
    source_code_files = list_python_files(code_directory)

    for py_file in source_code_files:
        flake8_report = run_flake8(py_file)
        write_flake8_report(flake8_report, py_file)