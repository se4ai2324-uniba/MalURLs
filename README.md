MalURLs
==============================

# 1) Introduction

The system is designed to classify malicious URLs using features extracted by the URL itself.
Using a supervised approach, it employs a Random Forest to detect URLs and a module to extract 15 features from the URL string. The system has demostrated good performances compared to the state-of-art and it is useful for the everyday-use in web navigation.

The model has been realized for the Machine Learning exam, a.y. 2022-2023; 
- The model card is available [here](models/README.md)
- The data card is available [here](data/README.md)

# 2) Machine learning pipeline
For the creation of the ml pipeline we use dvc, the pipeline consists of five stages: 
1. make_dataset: creates the dataset from the original features dataset
2. build_features: divides the dataset got from the previous step into training and test
3. train_base_model: trains the base Random forest model and saves the model
4. train_tuned_model: trains the tuned Random forest model and saves the model
5. predict: makes predictions on both models and creates json classification reports

Experiments are tracked using MLflow and data is stored on Dagshub.
To run the ml pipeline, it is assumed that python 3.9 is installed, dvc is installed and the file urls_with_featurs.csv is in the data directory.
Then, the following steps are required:

#### 1) Create and activate a python virtual enviornment
~~~
python -m venv malurls_env

malurls_env\Scripts\Activate
~~~

#### 2) Install requirements
~~~
pip install -r requirements.txt
~~~

#### 3) Run the dvc pipeline
~~~
dvc repro
~~~

During the training phase the codecarbon library is used to monitor the environmentl impact of the models' training.
Codecarbon text reports are saved under the folder /reports/codecarbon and are:
- [report_base_model](reports/codecarbon/base_model_emissions.txt)
- [report_tuned_model](reports/codecarbon/tuned_model_emissions.txt)

All details of models' emissions are in the model card.

# 3) Backend
The backend of our project was developed using Flask API. We chose Flask to create the API endpoints essential to feature extraction and URL scanning.

## A. Running the API locally
To initiate the server, it is required that Python 3.9 is installed and the following two *.pkl files are located in the models directory:
- base_rf_model.pkl
- tuned_rf_model.pkl

## API Endpoints
- **/:** Main page (GET)
- **/get_features**: Extract features of a URL (POST)
- **/models**: Get available models (GET)
- **/scan:**: Scan a URL with a selected model (POST)
- **/docs**: for Swagger UI documentation. (GET)
  
#### 1) Create and activate a python virtual enviornment
~~~
python -m venv docker_env

docker_env\Scripts\Activate
~~~

#### 2) Install requirements
~~~
pip install -r docker_requirements.txt
~~~
#### 3) Run the server
~~~
python src/api/main.py
~~~
The server run the address http://127.0.0.1:5000/.
Ensure the .pkl models files are in the /models folder and .csv data files are in /data folder.

## B. Pull and run the docker image

Another way to run the API is using Docker:

### 1) Pull the docker image directly using:
~~~
docker pull simonegramegna/malurls_api:latest
~~~

### 2) Run the docker image using: 
~~~
docker run -p 5000:5000 simonegramegna/malurls_api:latest
~~~

## C. Build and run the docker image

### 1) Build the image using the command 
~~~
docker build -t malurls_api .
~~~
### 2) Runnning the image:
~~~
docker run -p 5000:5000 malurls_api
~~~
Ensure the .pkl models files are in the /models folder and .csv data files are in /data folder.
## D. Build and run the docker image using docker-compose
### 1) Buid the enitre image using 
~~~
docker-compose build
~~~
Ensure the .pkl models files are in the /models folder and .csv data files are in /data folder.

### 2) Run the entire image using
~~~
docker-compose up
~~~

This command runs:
- Flask server on http://localhost:5000/
- Svelte interface on http://localhost:4173/
- Locust service on http://localhost:8089/
- Prometheus service on http://localhost:9090/
- Grafana service on http://localhost:3000/

# 4) Frontend
The frontend provides an easy-to-use interface for the API, it is written using the Svelte Javascript framework. 

To run the interface there are two ways:

## A. Run the interface locally using Node JS

### 1) Build the Svelte application
Assuming that node JS is installed the user, going in the SvelteApp subfolder can build the interface using the command:

~~~
npm run build
~~~

### 2) Run the Svelte application

Run the svelte application (while the flask server is active) using:
~~~
npm run preview -- --host 127.0.0.1
~~~

The interface runs on address: http://127.0.0.1:4173/ .

## B. Run the interface using docker-compose
Assuming that Docker is installed:

### 1) Build the container using:
~~~
docker-compose build
~~~


### 2) Run the container using:

~~~
docker-compose up
~~~

This command runs:
- Flask server on http://localhost:5000/
- Svelte interface on http://localhost:4173/
- Locust service on http://localhost:8089/
- Prometheus service on http://localhost:9090/
- Grafana service on http://localhost:3000/


# 5) Performance Monitoring
In order to monitor the performance of our application, we used the following tools:
## **Locust**
Locust helps in simulating millions of simultaneous users to test the load capacity of our application, ensuring it can handle high traffic.


### A. Run locust locally
To initiate Locust, we must first install the Locust library using following commands:

#### 1) Install locust
~~~ 
pip install locust
~~~

#### 2) Run locust
~~~
locust --host=http://127.0.0.1:5000
~~~
With this command Locust is available at the address: http://localhost:8089/.

### B. Run Locust using Docker

Assuming that Docker is installed

#### 1) Build the docker container 
~~~
docker-compose build
~~~

#### 2) Run the container 

~~~
docker-compose up
~~~

This command runs:
- Flask server on http://localhost:5000/
- Svelte interface on http://localhost:4173/
- Locust service on http://localhost:8089/
- Prometheus service on http://localhost:9090/
- Grafana service on http://localhost:3000/container 

For further details see the Locust report [here](reports/locust_report.html)

## **Prometheus**
While locust performs load test, Prometheus generates data on perforamance and load, those data are used by Grafana for visualization.
To allow Prometheus to read project statistic, it is needed to open a port on Docker engine by addding this line of code into Settings->Docker engine in Docker desktop:
~~~
"metrics-addr": "127.0.0.1:9323"
~~~
It should looks like this:
~~~
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "metrics-addr": "127.0.0.1:9323"
}
~~~
After this step, Prometheus can be runned using docker:

#### 1) Build the docker container 
~~~
docker-compose build
~~~

#### 2) Run the container 

~~~
docker-compose up
~~~

This command runs:
- Flask server on http://localhost:5000/
- Svelte interface on http://localhost:4173/
- Locust service on http://localhost:8089/
- Prometheus service on http://localhost:9090/



## **Grafana**
We use Grafana for data visualization, monitoring, and analytics that enables users to create dynamic and interactive dashboards. For further details see the report [here](reports/grafana_report.PNG).

Grafana can be runned using docker:
#### 1) Build the docker container 
~~~
docker-compose build
~~~

#### 2) Run the container 

~~~
docker-compose up
~~~

This command runs:
- Flask server on http://localhost:5000/
- Svelte interface on http://localhost:4173/
- Locust service on http://localhost:8089/
- Prometheus service on http://localhost:9090/
- Grafana service on http://localhost:3000/

To access the Grafana service one goes to http://localhost:3000/, which opens a login form that requires username and password which are: 'admin', 'admin'. 

Once logged in to Grafana you have to load the Grafana dashboard, available [here](grafana/Grafana_dashboard.json).
Then you can see the metrics collected from Prometheus.


## **Alibi-detect**

Using Alibi Detect, we conduct drift detection for both feature and target variables. In cases where drift is identified in any of these elements, we initiate the re-training of models with the newly updated data. See the interested file [here](performance_monitoring/drift_detection.py).
Additionally, we have implemented outlier detection using the Isolation Forest algorithm, the details of which are outlined in this [report](reports/outliers_detection_report.md).

To execute notebook, run following commands (assuming jupyter is installed):
### 1) Create and activate virtual environment
~~~
python -m venv performance_env

performance_env\Scripts\Activate
~~~

### 2) Install requirements
~~~
pip install -r performance_requirements.txt
~~~

### 3) Run Jupyter
~~~
jupyter-notebook
~~~

## **Deepchecks**
Another tool to execute drift detection on input data is Deepchecks which html report is located in the 'reports' folder and it is: [here](reports/deep_checks_report.html).
To execute Deepchecks script:

### 1) Create and activate virtual environment
~~~
python -m venv deepchecks_env

deepchecks_env\Scripts\Activate
~~~

### 2) Install requirements
~~~
pip install -r deepcheck_requirements.txt
~~~

### 3) Run the Deepchecks script
~~~
python performance_monitoring/outliers_deepchecks.py
~~~
## **Better Uptime**
We use better uptime to monitor the deployed application online. You can see the page following this [link](https://malurls.betteruptime.com/).

# 6) Testing
We use **Great Expectations** library to run test on data. 

Instead, we use **Pytest library** to run following tests on:
- directionality
- invariance
- minimum functionality
- flask api
- get_features module

Pytest report is available [here](tests/docs/pytest_report.txt).

For code quality we use Pylint and Flake8 python libraries, 
- Flake8 reports are available [here](tests/docs/flake8_reports/)
- Pylint reports are available [here](tests/docs/pylint_reports/)

# 7) Deployment
The interface and the flask api are automatically deployed on Azure without using any Github action:
- The API is available [here](https://malurls-api.azurewebsites.net/)
- The frontend is available [here](https://malurls-web.azurewebsites.net/)

# 8) Project Organization
------------

    ├── LICENSE
    ├── Makefile                <- Makefile with commands like `make data` or `make train`
    ├── README.md               <- The top-level README for developers using this project.
    ├── .github \ workflows     <- Github actions
    |   ├── flake8.yml      
    │   ├── pylint.yml          
    │   ├── pytest.yml
    |   ├── docker-image.yml
    |   └── performance_monitoring.yml
    |
    ├── data
    │   ├── train.csv           <- Training data for the model
    │   ├── test.csv            <- Testing data for the model
    │   ├── urls_with_          <- Dataset in which a feature selection function has been applied
    |   |   features_
    |   |   selected.csv     
    │   ├── urls_with_          <- Initial dataset
    |   |   features.csv
    |   ├── api_urls.csv   
    |   ├── test_data_invariance
    |   |  ├── train.csv
    |   |  ├── test.csv
    |   └── README.md           <- All the details about data
    │
    ├── docs                    <- A default Sphinx project; see sphinx-doc.org for details
    ├── locust                  <- Folder that contains configurations file for locust tests
    |   ├── DockerFile
    |   ├── locustfile.py 
    |   └── urls_test.csv
    │
    ├── mlruns                  <- All the MLFlow runs
    |
    ├── models                  <- Trained and serialized models
    |   ├── base_rf_model.pk
    |   ├── tuned_rf_model.pk
    |   └── README.md           <- All the details about the models
    │
    ├── notebooks               <- Jupyter notebook of the original project 
    │  └── 1.0-MalURLs-model.ipynb                       
    │                        
    ├── performance_monitoring
    |   ├── __init__.py
    |   ├── drift_detection.py
    |   ├── drift.txt
    |   ├── outliers_deepchecks.py
    |   └── outliers_detection.ipynb
    |
    ├── prometheus
    |   ├── Dockerfile
    |   └── prometheus.yml
    |   
    ├── references              <- Data dictionaries, manuals, and all other explanatory materials.
    │
    ├── reports                 <- Generated json analysis files of the model's performances.
    |   ├── codecarbon
    |   |   ├── base_model_emissions.txt
    |   |   └── tuned_model_emissions.txt
    |   ├── figures 
    |   ├── tests
    │   ├── classification      <- Report of the base model's performances
    |   |   _report_base_rf.json       
    │   ├── classification      <- Report of the tuned model's performances
    |   |   _report_tuned_rf.json         
    |   ├── confusion_matrix    <- Confusion matrix for the base model's performances
    |   |       _base_rf.json 
    |   ├── confusion_matrix    <- Confusion matrix for the tuned model's performances
    |   |      _tuned_rf.json
    |   ├── deep_checks_report.html
    |   └── outliers_detection_report.md
    |   
    |               
    │
    ├── requirements.txt        <- The requirements file for reproducing the analysis environment, e.g.
    │                               generated with `pip freeze > requirements.txt`
    │
    ├── setup.py                <- makes project pip installable (pip install -e .) so src can be imported
    ├── src                     <- Source code for use in this project.
    │   ├── __init__.py         <- Makes src a Python module
    |   ├── api                 <- Files used for the API
    |   |   ├── static
    |   |   |  └── swagger.json <- Swagger documentation
    |   |   |
    |   |   ├── api_utils.py    <- Utility functions for flask API
    |   |   ├── get_features.py <- Get features from the URLs
    |   |   └── main.py         <- Main file for the flask API
    |   |
    │   ├── data                <- Script to generate data
    │   │   └── make_dataset.py <- File for the preprocessing of data
    │   │
    │   ├── features                 <- Scripts to turn raw data into features for modeling
    |   |   ├── build_features.py    <- Split the dataset with selected features in train and test
    │   │   └── build_features_tests.py
    │   │
    │   ├── models                   <- Scripts to train models and then use trained models to make
    │   │   │                           predictions
    │   │   ├── predict.py           <- Use the models to make predictions on the test set
    │   │   ├── train_base_model.py  <- Train the base random forest model
    │   │   ├── train_tuned_model.py <- Train the tuned random forest model
    │   │   └── utils.py             <- Utility functions to read data
    │   │
    │   └── visualization            <- Scripts to create exploratory and results oriented visualizations
    │       └── visualize.py
    |
    ├── SvelteApp                    <- SvelteApp interface for the model
    |
    ├── test
    │   ├── api_test
    │   │   ├── test_api.py          <- Test used for the API
    │   │   ├── api_test_utils.py    <- Utility function for the tests on API
    │   │   └── test_get_features    <- Tests on the function get_features
    |   |
    │   ├── behavioral_testing
    │   │   ├── test_directionality  <- Directionality test for the model
    |   |   |                   .py         
    │   │   ├── test_invariance.py   <- Invariance test for the model
    │   │   ├── test_minimum_        <- Minimum functionality test for the model
    |   |   |      functionality.py     
    |   |   └── utils.py             <- Utility functions for the tests
    |   |
    │   ├── docs
    │   │   ├── flake8_reports       <- Contains the reports for the flake8 tests   
    │   │   ├── pylint_reports       <- Contains the reports for the pylint tests
    │   │   └── pytest_report.txt    <- Report of the behavioral tests of pytest
    |   |
    │   ├── pylint_flake8            <- Script for flake8 and pylint tests
    |   |   ├── flake8_test.py
    │   |   └── pylint_test.py
    │   └── system_test              <- Tests on data
    │       └── data_tests.py 
    |
    ├── docker_requirements.txt      <- Requirements for Docker
    ├── deepcheck_requirements.txt   <- Requirements for Deep check
    ├── performance_requirements.txt <- Requirements for Performance Monitoring
    ├── Dockerfile                   <- File used by Docker
    ├── dvc.lock                     <- File used by DVC
    ├── dvc.yaml                     <- Configuration file for DVC
    ├── requirements.txt             <- Libraries for the model
    ├── LICENSE                      
    └── tox.ini                      <- tox file with settings for running tox; see tox.readthedocs.io

--------
