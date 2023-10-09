---
license: 
language: en
---

# Model Card for Malicious URL detection

The objective of this project is to identify and classify malicious URLs. We use machine learning techniques, specifically focusing on Random Forest, to detect malicious URLs.

## Model Details

The Random Forest classifier is a popular machine learning algorithm available in the scikit-learn library, it belongs to the ensemble learning family and is renowned for its versatility and robustness in both classification and regression tasks. Random Forest works by creating multiple decision trees during training and combining their predictions to make more accurate and stable predictions.
We started from a dataset of URL features, dividing it in:

- 80% training
- 20% testing

Then the Random Forest classifier model has been trained on a subset of features got by a phase of feature selection and training (and testing) features are the following:

- Number of dots
- Path length
- URL length
- Hostname lenghth
- Number of digits
- Subdomain level
- Path level
- Number of dash symbols
- Presence of IP address
- Number of query components
- Query length
- Number of Ampersand symbols
- Number of anderscore symbols
- Presence HTTPS in URL
- Number of percenent

After employing this first training, we evaluated the significance of various features in the classification process. To refine our model further, we identified the top four features that played a crucial role in distinguishing malicious URLs:

- Number of dots
- Path length
- URL length
- Hostname length
  
By emphasizing these key features, we effectively enhanced the accuracy and precision of our classification model.

The Random Forest algorithm mitigates overfitting, a common issue in machine learning, by introducing randomness through data and feature subsampling. This method ensures the model's robustness and prevents it from becoming too specific to the training data. Furthermore, Random Forest provides insights into feature importance, gauged by average depth or impurity decrease resulting from splitting on a specific feature. This information guides the selection of essential features and significantly contributes to the model's accuracy.

We implemented the Random Forest algorithm using the RandomForestClassifier function from the scikit-learn library, a popular Python machine learning library. This implementation yielded an impressive accuracy rate of 89.30%. Notably, the model's execution time was optimized to a remarkable 0.76 seconds, demonstrating its efficiency and suitability for real-time applications.

### Model Description

- **Model type:** Random Forest Classifier
- **License:** BSD 3-Clause
- **Repository:** [Random Forest Github repository] (https://github.com/scikit-learn/scikit-learn/blob/d99b728b3/sklearn/ensemble/_forest.py)

## Intended Use

**Primary intended uses:**

The primary purpose of the model is to automatically detect malicious URLs. Its main function is to enhance security systems by identifying potentially harmful web addresses.

**Primary intended users:**

The model is purposefully designed to cater to the needs of users with limited web browsing experience, ensuring their safety while navigating online platforms. Its primary application revolves around the automatic detection of malicious URLs.

**Out-of-Scope Use:**

 Use cases beyond the model's scope include tasks unrelated to URL classification, such as identifying other types of cybersecurity threat(e.g., malware detection within files or network intrusion detection). Additionally, the model does not cover non-cybersecurity-related tasks, such as natural language processing or image recognition.

## Training Details

### Training Data

<!-- This should link to a Data Card, perhaps with a short stub of information on what the training data is all about as well as documentation related to data pre-processing or additional filtering. -->

MaliciousURLs is a huge dataset of 651,191 URLs, out of which 428103 benign or safe URLs, 96457 defacement URLs, 94111 phishing URLs, and 32520 malware URLs. The dataset is created by collecting URLs from various sources and each one belongs to one of those five classes (benign, phishing, malware, defacement, spam) and then merged into a unified dataset.
We started reducing the size of datset to 20.000 examples (using random sampling) and grouping malicious classes into a single class, called "malicious". After this phase in which we got 10000 benign URLs and 10000 malicious URLs we procedeed to extract features in order to train the model.

### Training Procedure

The Random Forest classifier is trained using an 80/20 split for training and test data. Evaluation metrics such as test accuracy, execution time, precision, recall, and F1-score are calculated, additionally, a Random Forest classifier is trained again, focusing on the top-four features: Number of dots, Path length, URL length, and Hostname length.

#### Training Hyperparameters

Tha base model has the following hyperparameters:

- random state = 3

To evaluate the base model we choosed three criteria:

- GINI
- ENTROPY
- LOG_LOSS

and we got the following results:

| CRITERION | PRECISION | RECALL | F1    | ACCURACY | EXEC. TIME |
|-----------|-----------|--------|-------|----------|------------|
| GINI      | 0.884     | 0.900  | 0.892 | 0.893    | 0.82       |
| ENTROPY   | 0.888     | 0.900  | 0.894 | 0.894    | 0.89       |
| LOG_LOSS  | 0.888     | 0.900  | 0.894 | 0.894    | 0.88       |

In order to find the best model, using Grid Search we discovered best parameters for our model that are:

- bootstrap: False
- max_depth: 100
- min_samples_leaf: 1
- min_samples_split: 10
- n_estimators: 3000
  
This model has been trained on the original dataset of 15 features.

## Evaluation

### Testing Data, Factors & Metrics

#### Testing Data

<!-- This should link to a Data Card if possible. -->

20% of the dataset was used to evaluate the results.

#### Metrics

Evaluation metrics are the following:

- Accuracy
- Precision
- Recall
- F1-score

### Quantitative Analyses

Final model results are:

| Metric        | Base Model | Best Model | Gain (%)    |
|---------------|------------|------------|-------------|
| Precision     | 0.884      | 0.888      | 0.45        |
| Recall        | 0.900      | 0.904      | 0.45        |
| F1            | 0.892      | 0.896      | 0.45        |
| Accuracy      | 0.893      | 0.897      | 0.45        |
| Execution Time| 0.789      | 31.783     | 3929.51     |

## Ethical Considerations

One limitation is the possible presence of biases in the training dataset, which could affect the model's predictions if the dataset does not fully reflect all possible scenarios.
Intrinsic risks of the model also emerge, such as the possibility of false positives and negatives, despite optimization efforts, with a particular focus on errors that may occur.
Limitations of the model include its exclusive reliance on intrinsic characteristics of URLs, meaning that some threats may escape identification if content information is not also analyzed.
Furthermore, it would not be possible to detect new threats or complex attack patterns that may not be adequately represented in the training data. These aspects highlight the critical approach adopted in evaluating the reliability and robustness of the proposed model for the detection of malicious URLs.

### Recommendations

To mitigate the risks of data bias, it is essential to adopt an approach that ensures diversity and representativeness in the training dataset, with periodic reviews to correct any biases.

## Model Card Authors

- Simone Gramegna
- Ivan De Cosmis
- Federico Canistro
- Rosa Vicenti
- Vito Vicenti
