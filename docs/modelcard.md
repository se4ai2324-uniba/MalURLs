---
license: 
language: en
---

# Model Card for Malicious URL detection

The objective of this project is to identify and classify malicious URLs. We use machine learning techniques, specifically focusing on Random Forest, to detect malicious URLs.

## Model Details

We use Random Forest Classifier to detect malicious URLs. After employing the Random Forest algorithm, we evaluated the significance of various features in the classification process. To refine our model further, we identified the top four features that played a crucial role in distinguishing malicious URLs:

- Number of dots
- Path length
- URL length
- Hostname length
  
By emphasizing these key features, we effectively enhanced the accuracy and precision of our classification model.

The Random Forest algorithm mitigates overfitting, a common issue in machine learning, by introducing randomness through data and feature subsampling. This method ensures the model's robustness and prevents it from becoming too specific to the training data. Furthermore, Random Forest provides insights into feature importance, gauged by average depth or impurity decrease resulting from splitting on a specific feature. This information guides the selection of essential features and significantly contributes to the model's accuracy.

We implemented the Random Forest algorithm using the RandomForestClassifier function from the scikit-learn library, a popular Python machine learning library. This implementation yielded an impressive accuracy rate of 89.30%. Notably, the model's execution time was optimized to a remarkable 0.76 seconds, demonstrating its efficiency and suitability for real-time applications.

These meticulous considerations and optimizations underline the reliability and effectiveness of our approach in identifying and classifying malicious URLs, showcasing the robustness of the Random Forest algorithm in handling complex feature sets and achieving high accuracy rates.

### Model Description

- **Developed by:** Simone Gramegna, Alberto Gaetano Valerio
- **Model type:** Random Forest Classifier
- **Language(s) (NLP):**  Python
- **License:**

### Model Sources [optional]

<!-- Provide the basic links for the model. -->

- **Repository:** {{ repo | default("[More Information Needed]", true)}}
- **Paper [optional]:** {{ paper | default("[More Information Needed]", true)}}
- **Demo [optional]:** {{ demo | default("[More Information Needed]", true)}}

## Uses

<!-- Address questions around how the model is intended to be used, including the foreseeable users of the model and those affected by the model. -->
As already mentioned, the aim of this project is to detect malicious URLs using only the features
we can obtain from the URL without taking into account either the characteristics
of the associated website or the network traffic obtained by visiting the domain. In this way, any user with a minimum of surfing experience can
recognise a potentially malicious URL from a safe URL at a glance without the use
of additional tools.

### Direct Use

<!-- This section is for the model use without fine-tuning or plugging into a larger ecosystem/app. -->

{{ direct_use | default("[More Information Needed]", true)}}

### Downstream Use [optional]

<!-- This section is for the model use when fine-tuned for a task, or when plugged into a larger ecosystem/app -->

{{ downstream_use | default("[More Information Needed]", true)}}

### Out-of-Scope Use

<!-- This section addresses misuse, malicious use, and uses that the model will not work well for. -->

{{ out_of_scope_use | default("[More Information Needed]", true)}}

## Bias, Risks, and Limitations

One limitation is the possible presence of biases in the training dataset, which could affect the model's predictions if the dataset does not fully reflect all possible scenarios.
Intrinsic risks of the model also emerge, such as the possibility of false positives and negatives, despite optimization efforts, with a particular focus on errors that may occur.
Limitations of the model include its exclusive reliance on intrinsic characteristics of URLs, meaning that some threats may escape identification if content information is not also analyzed.
Furthermore, it would not be possible to detect new threats or complex attack patterns that may not be adequately represented in the training data. These aspects highlight the critical approach adopted in evaluating the reliability and robustness of the proposed model for the detection of malicious URLs.

### Recommendations

To mitigate the risks of data bias, it is essential to adopt an approach that ensures diversity and representativeness in the training dataset, with periodic reviews to correct any biases.

## How to Get Started with the Model

Use the code below to get started with the model.

{{ get_started_code | default("[More Information Needed]", true)}}

## Training Details

### Training Data

<!-- This should link to a Data Card, perhaps with a short stub of information on what the training data is all about as well as documentation related to data pre-processing or additional filtering. -->

{{ training_data | default("[More Information Needed]", true)}}

### Training Procedure

<!-- This relates heavily to the Technical Specifications. Content here should link to that section when it is relevant to the training procedure. -->
In the context of the Random Forest model, the objective is to select the best features from three sets: the original features, Principal Component Analysis (PCA), and Autoencoder (encoded features). PCA is applied with 2 to 8 components, and various metrics including execution time, precision, recall, F1-score, and accuracy are computed. The consideration of execution time is crucial due to the limited sample size of the original dataset. The Random Forest classifier is trained using an 80/20 split for training and test data. Evaluation metrics such as test accuracy, execution time, precision, recall, and F1-score are calculated. Additionally, a Random Forest classifier is trained again, focusing on the top-four features: Number of dots, Path length, URL length, and Hostname length.

#### Training Hyperparameters

- **Training regime:** In Random Forest hyperparameters tuning was performed on the Random Forest model by experimenting with different split criteria: Gini, Entropy, and Log Loss.The values obtained by varying the criterion are quite the same, so we decide
to apply the default one, which is ’gini’, for the future computations.

   Then, we do tuning of five hyperparameters: number of estimators, max depth, min samples split, min samples leaf and  bootstrap.
We train a new Random forest classifier with the best hyperparameters and getting
following results:

| Metric        | Base Model | Best Model | Gain (%)    |
|---------------|------------|------------|-------------|
| Precision     | 0.884      | 0.888      | 0.45        |
| Recall        | 0.900      | 0.904      | 0.45        |
| F1            | 0.892      | 0.896      | 0.45        |
| Accuracy      | 0.893      | 0.897      | 0.45        |
| Execution Time| 0.789      | 31.783     | 3929.51     |

#### Speeds, Sizes, Times [optional]

<!-- This section provides information about throughput, start/end time, checkpoint size if relevant, etc. -->

{{ speeds_sizes_times | default("[More Information Needed]", true)}}

## Evaluation

<!-- This section describes the evaluation protocols and provides the results. -->

### Testing Data, Factors & Metrics

#### Testing Data

<!-- This should link to a Data Card if possible. -->

20% of the dataset was used to evaluate the results.

#### Factors

<!-- These are the things the evaluation is disaggregating by, e.g., subpopulations or domains. -->

{{ testing_factors | default("[More Information Needed]", true)}}

#### Metrics

<!-- These are the evaluation metrics being used, ideally with a description of why. -->

The model's performances were evaluated using four common metrics: accuracy, precision, recall and F1 score.

### Results

|                   | Accuracy   | Precision  | Recall      | F1          |
|-------------------|------------|------------|-------------|-------------|
| All features      | 0.893      | 0.884      | 0.900       | 0.892       |
| PCA 2             | 0.813      | 0.801      | 0.821       | 0.811       |
| PCA 4             | 0.855      | 0.849      | 0.860       | 0.854       |
| PCA 6             | 0.861      | 0.853      | 0.867       | 0.860       |
| PCA 8             | 0.862      | 0.856      | 0.867       | 0.861       |
| Autoencoder       | 0.862      | 0.852      | 0.870       | 0.861       |
| Gini              | 0.884      | 0.900      | 0.892       | 0.893       |
| Entropy           | 0.888      | 0.900      | 0.894       | 0.894       |
| Log loss          | 0.888      | 0.900      | 0.894       | 0.894       |
| Best model        | 0.897      | 0.888      | 0.904       | 0.896       |

#### Summary

Observing the results that the model provided on the test set we can conclude:

- the initial dataset composed of 15 lexical features led to better results; however the 8 features set extracted from the Autoencoder have shown very promising results.
- the careful selection of the best hyperparameters has brought advantages for all models even if in some cases only by a few tenths of a percentage

## Model Examination [optional]

<!-- Relevant interpretability work for the model goes here -->

{{ model_examination | default("[More Information Needed]", true)}}

## Environmental Impact

<!-- Total emissions (in grams of CO2eq) and additional considerations, such as electricity usage, go here. Edit the suggested text below accordingly -->

Carbon emissions can be estimated using the [Machine Learning Impact calculator](https://mlco2.github.io/impact#compute) presented in [Lacoste et al. (2019)](https://arxiv.org/abs/1910.09700).

- **Hardware Type:** T4 GPU
- **Hours used:**  

|                    | hours      |
|--------------------|------------|
| All features       | 0,00022    |
| PCA 2              | 0,00029    |  
| PCA 4              | 0,00049    |
| PCA 6              | 0,00050    |
| PCA 8              | 0,00049    |
| Autoencoder        | 0,00047    |
| GINI               | 0,00024    |
| Entropy            | 0,00025    |
| Log loss           | 0,00024    |
| Best model         | 0,00883    |
| Total time         | 0,01226    |

- **Cloud Provider:** Google
- **Compute Region:** Unknown
- **Carbon Emitted:** {{ co2_emitted | default("[More Information Needed]", true)}}

## Technical Specifications [optional]

### Model Architecture and Objective

{{ model_specs | default("[More Information Needed]", true)}}

### Compute Infrastructure

{{ compute_infrastructure | default("[More Information Needed]", true)}}

#### Hardware

{{ hardware | default("[More Information Needed]", true)}}

#### Software

{{ software | default("[More Information Needed]", true)}}

## Citation [optional]

<!-- If there is a paper or blog post introducing the model, the APA and Bibtex information for that should go in this section. -->

**BibTeX:**

**APA:**

## Glossary [optional]

<!-- If relevant, include terms and calculations in this section that can help readers understand the model or model card. -->

{{ glossary | default("[More Information Needed]", true)}}

## More Information [optional]

{{ more_information | default("[More Information Needed]", true)}}

## Model Card Authors [optional]

Federico Canistro, Ivan de Cosmis, Simone Gramegna, Rosa Vicenti, Vito Vicenti

## Model Card Contact

{{ model_card_contact | default("[More Information Needed]", true)}}
