import subprocess
from pathlib import Path
import os
import pylint


PROJECT_PATH = str(Path(Path(__file__).resolve().parents[2]))

PYLINT_REPORT_PATH = PROJECT_PATH + "\\tests\\docs\\pylint_reports"

def run_pylint(file_path):
    command = ['pylint', file_path]
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

def write_pylint_report(pylint_report, source_file_name : str):

    report_name = "pylint_" + os.path.splitext(os.path.basename(source_file_name))[0]
    report_file = PYLINT_REPORT_PATH + "\\" + report_name + ".txt"

    with open(report_file, "w") as pylint_report_file:
        pylint_report_file.write(pylint_report)
    
    pylint_report_file.close()

if __name__ == '__main__':
    code_directory = PROJECT_PATH + "\\src"
    source_code_files = list_python_files(code_directory)

    for py_file in source_code_files:
        pylint_report = run_pylint(py_file)

        print(pylint_report)

        write_pylint_report(pylint_report, py_file)