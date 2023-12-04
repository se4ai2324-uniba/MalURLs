MalURLs
==============================

The system is designed to classify malicious URLs using features extracted by the URL itself.
Using a supervised approach, it employs a Random Forest to detect URls and a module to extract 15 features from the URL string. The system has demostrated good performances compared to the state-of-art and it is useful for the everyday-use in web navigation.

The model has been realized for the Machine Learning exam, a.y. 2022-2023; the model card is available [here](https://github.com/se4ai2324-uniba/MalURLs/blob/master/models/README.md)

Project Organization
------------

    ├── LICENSE
    ├── Makefile                <- Makefile with commands like `make data` or `make train`
    ├── README.md               <- The top-level README for developers using this project.
    ├── data
    │   ├── train.csv           <- Training data for the model
    │   ├── test.csv            <- Testing data for the model
    │   ├── urls_with_          <- Dataset in which a feature selection function has been applied
    |   |   features_
    |   |   selected.csv     
    │   ├── urls_with_          <- Initial dataset
    |   |   features.csv   
    |   └── README.md           <- All the details about data
    │
    ├── docs                    <- A default Sphinx project; see sphinx-doc.org for details
    │
    ├── mlruns                  <- All the MLFlow runs
    |
    ├── models                  <- Trained and serialized models
    |   ├── base_rf_model.pk
    |   ├── tuned_rf_model.pk
    |   └── README.md           <- All the details about the models
    │
    ├── notebooks               <- Jupyter notebook of the original project. Naming convention is a number (for ordering),the creator's initials, and a short `-` delimited description, e.g.  `1.0-jqp-initial-data-exploration`.
    │  └── SEAI_MalURLS.ipynb                       
    │                        
    │
    ├── references              <- Data dictionaries, manuals, and all other explanatory materials.
    │
    ├── reports                 <- Generated json analysis files of the model's performances.
    │   ├── classification      <- Report of the base model's performances
    |   |   _report_base_rf
    |   |   .json       
    │   ├── classification      <- Report of the tuned model's performances
    |   |   _report_tuned_
    |   |         rf.json         
    |   ├── confusion_matrix    <- Confusion matrix for the base model's performances
    |   |   _base_rf.json 
    |   ├── confusion_matrix    <- Confusion matrix for the tuned model's performances
    |   |   _tuned_rf.json 
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
    │   ├── data                <- Script to generate data
    │   │   └── make_dataset.py <- File for the preprocessing of data
    │   │
    │   ├── features                 <- Scripts to turn raw data into features for modeling
    |   |   ├── build_features.py    <- Split the dataset with selected features in train and test
    │   │   └── build_features      
    |   |             _tests.py
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
    ├── test
    │   ├── api_test
    │   │   ├── test_api.py          <- Test used for the API
    │   │   ├── api_test_utils.py    <- Utility function for the tests on API
    │   │   └── test_get_features    <- Tests on the function get_features
    │   ├── behavioral_testing
    │   │   ├── test_directionality  <- Directionality test for the model
    |   |   |                   .py         
    │   │   ├── test_invariance.py   <- Invariance test for the model
    │   │   ├── test_minimum_        <- Minimum functionality test for the model
    |   |   |      functionality.py     
    |   |   └── utils.py             <- Utility functions for the tests
    │   ├── docs
    │   │   ├── flake8_reports       <- Contains the reports for the flake8 tests   
    │   │   ├── pylint_reports       <- Contains the reports for the pylint tests
    │   │   ├── pytest_report.txt    <- Report of the behavioral tests of pytest
    │   ├── pylint_flake8            <- Script for flake8 and pylint tests
    │   |   └── pylint_flake8_test.py
    │   └── system_test              <- Tests on data
    │       └── data_tests.py 
    |
    ├── docker_requirements.txt      <- Requirements for Docker
    ├── Dockerfile                   <- File used by Docker
    ├── dvc.lock                     <- File used by DVC
    ├── dvc.yaml                     <- Configuration file for DVC
    ├── requirements.txt             <- Libraries for the model
    └── tox.ini                      <- tox file with settings for running tox; see tox.readthedocs.io

--------

<p><small>Project based on the <a target="_blank" href="https://drivendata.github.io/cookiecutter-data-science/">cookiecutter data science project template</a>. #cookiecutterdatascience</small></p>
