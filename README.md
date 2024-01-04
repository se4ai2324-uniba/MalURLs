MalURLs
==============================

# 1) Introduction

The system is designed to classify malicious URLs using features extracted by the URL itself.
Using a supervised approach, it employs a Random Forest to detect URls and a module to extract 15 features from the URL string. The system has demostrated good performances compared to the state-of-art and it is useful for the everyday-use in web navigation.

The model has been realized for the Machine Learning exam, a.y. 2022-2023; the model card is available [here](https://github.com/se4ai2324-uniba/MalURLs/blob/master/models/README.md)

# 2) Machine learning pipeline
For the creation of the ml pipeline we use dvc, the pipeline consists of five stages: 
1. make_dataset: creates the dataset from the original features dataset
2. build_features: divides the dataset got from the previous step into training and test
3. train_base_model: trains the base Random forest model and saves the model
4. train_tuned_model: trains the tuned Random forest model and saves the model
5. predict: makes predictions on both models and creates json classification reports

Experiments are tracked using MLflow and data is stored on Dagshub
To run the ml pipeline, following steps are required:

### 1) Create a python virtual enviornment
~~~
python -m venv malurls_env
~~~

Project Organization
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

<p><small>Project based on the <a target="_blank" href="https://drivendata.github.io/cookiecutter-data-science/">cookiecutter data science project template</a>. #cookiecutterdatascience</small></p>
