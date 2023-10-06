---
annotations_creators:
  - crowdsourced
language: []
language_creators:
  - crowdsourced
license:
  - cc0-1.0
multilinguality: []
pretty_name: MaliciousURLsDataset
size_categories:
  - 1K<n<1M
source_datasets: []
tags: []
task_categories:
  - text-classification
task_ids: []
---

# Dataset Card for MaliciousURLs Dataset

## Table of Contents

- [Dataset Card for MaliciousURLs Dataset](#dataset-card-for-maliciousurls-dataset)
  - [Table of Contents](#table-of-contents)
  - [Dataset Description](#dataset-description)
    - [Dataset Summary](#dataset-summary)
    - [Supported Tasks](#supported-tasks)
  - [Dataset Structure](#dataset-structure)
    - [Data Instances](#data-instances)
    - [Data Splits](#data-splits)
  - [Dataset Creation](#dataset-creation)
    - [Curation Rationale](#curation-rationale)
      - [Initial Data Collection and Normalization](#initial-data-collection-and-normalization)
    - [Annotations](#annotations)
      - [Annotation process](#annotation-process)
  - [Considerations for Using the Data](#considerations-for-using-the-data)
    - [Discussion of Biases](#discussion-of-biases)
    - [Other Known Limitations](#other-known-limitations)
  - [Additional Information](#additional-information)
    - [Dataset Curators](#dataset-curators)
    - [Contributions](#contributions)

## Dataset Description

- **Homepage:** https://www.kaggle.com/datasets/sid321axn/malicious-urls-dataset
- **Repository:** https://www.kaggle.com/datasets/sid321axn/malicious-urls-dataset
- **Paper:** None
- **Point of Contact:** https://www.kaggle.com/sid321axn

### Dataset Summary

MaliciousURLs is a huge dataset of 651,191 URLs, out of which 428103 benign or safe URLs, 96457 defacement URLs, 94111 phishing URLs, and 32520 malware URLs.
The dataset is created by collecting URLs from various sources, including ISCX-URL-2016, a malware domain blacklist dataset, a Git repository for benign URLs, and additional phishing URLs from Phishtank and PhishStorm datasets. These URLs are organized into separate data frames based on their class type (benign, phishing, malware, defacement) and then merged into a unified dataset. This comprehensive dataset serves as a foundation for cybersecurity analysis, research, or machine learning tasks, ensuring a balanced representation of different URL types and aiding in the detection of malicious URLs.

<center>

![MaliciousURLs Dataset distribution data](file:///C:/Users/Lenovo/Desktop/SW_engineering/MalURLs/reports/figures/malurls_1.png)

</center>

Data distribution is the following:

- Benign: 65.55% (428080 URLs)
- Defacement: 14.59% (95308 URLs)
- Phishing: 14.41% (94086 URLs)
- Malware: 3.62% (23645 URLs)
- Spam: 1.83% (11921 URLs)

For training propouses I included all malicious classes (defacement, phishing, malware, spam) in just one class called: malicious
and we have this distribution:

<center>

![MaliciousURLs Dataset distribution data (with two classes)](file:///C:/Users/Lenovo/Desktop/SW_engineering/MalURLs/reports/figures/malurls_2.png)

</center>

So now data distribution is the follwing:

- Benign: 65.55% (428080 URLs)
- Malicious: 34.45% (224960 URLs)

To get a more balanced dataset, starting from the original dataset (with five classes) I performed random sampling for each class, in order to obtain:

1. 10000 Benign URLs
2. 10000 Malicious URLs

<center>

![MaliciousURLs Dataset distribution data (sampled)](file:///C:/Users/Lenovo/Desktop/SW_engineering/MalURLs/reports/figures/malurls_3.png)

</center>

In detail, the malicious URLs are:

- Defacement: 12.50% (2500 URLs)
- Phishing: 12.50% (2500 URLs)
- Malware: 12.50% (2500 URLs)
- Spam: 12.50% (2500 URLs)

<center>

![MaliciousURLs Dataset distribution data (sampled, with five classes)](file:///C:/Users/Lenovo/Desktop/SW_engineering/MalURLs/reports/figures/malurls_4.png)

</center>

To train our model, a new dataset was obtained from the dataset in which random sampling was performed, containing for each URL, the extracted features. 
Features are the following:

- `url`: The URL address.
- `numDots`: The number of dots (".") in the URL.
- `subdomainLevel`: The level of subdomains in the URL.
- `pathLevel`: The level of the URL path.
- `urlLength`: The total length of the URL.
- `numDash`: The number of dashes ("-") in the URL.
- `atSymbol`: The presence of the "@" symbol in the URL.
- `tildeSymbol`: The presence of the "~" symbol in the URL.
- `numUnderscore`: The number of underscores ("_") in the URL.
- `numPercent`: The number of percent symbols (%) in the URL.
- `numQueryComponents`: The number of components in the URL query.
- `numAmpersand`: The number of ampersand symbols (&) in the URL.
- `numHash`: The number of hash symbols (#) in the URL.
- `numDigits`: The number of digits in the URL.
- `https`: The presence of "https" in the URL.
- `ipAddress`: The presence of an IP address in the URL.
- `domainInSubdomains`: The presence of the domain within subdomains of the URL.
- `domainInPaths`: The presence of the domain in the URL paths.
- `httpsInHostname`: The presence of "https" in the hostname of the URL.
- `hostnameLength`: The length of the hostname in the URL.
- `pathLength`: The length of the URL path.
- `queryLength`: The length of the query component in the URL.
- `doubleSlash`: The presence of double slashes "//" in the URL.
- `type`: The type or classification of the URL.
- `url`: The URL address.
- `numDots`: The number of dots (".") in the URL.
- `subdomainLevel`: The level of subdomains in the URL.
- `pathLevel`: The level of the URL path.
- `urlLength`: The total length of the URL.
- `numDash`: The number of dashes ("-") in the URL.
- `atSymbol`: The presence of the "@" symbol in the URL.
- `tildeSymbol`: The presence of the "~" symbol in the URL.
- `numUnderscore`: The number of underscores ("_") in the URL.
- `numPercent`: The number of percent symbols (%) in the URL.
- `numQueryComponents`: The number of components in the URL query.
- `numAmpersand`: The number of ampersand symbols (&) in the URL.
- `numHash`: The number of hash symbols (#) in the URL.
- `numDigits`: The number of digits in the URL.
- `https`: The presence of "https" in the URL.
- `ipAddress`: The presence of an IP address in the URL.
- `domainInSubdomains`: The presence of the domain within subdomains of the URL.
- `domainInPaths`: The presence of the domain in the URL paths.
- `httpsInHostname`: The presence of "https" in the hostname of the URL.
- `hostnameLength`: The length of the hostname in the URL.
- `pathLength`: The length of the URL path.
- `queryLength`: The length of the query component in the URL.
- `doubleSlash`: The presence of double slashes "//" in the URL.
- `type`: The type or classification of the URL.
- `url`: The URL address.
- `numDots`: The number of dots (".") in the URL.
- `subdomainLevel`: The level of subdomains in the URL.
- `pathLevel`: The level of the URL path.
- `urlLength`: The total length of the URL.
- `numDash`: The number of dashes ("-") in the URL.
- `atSymbol`: The presence of the "@" symbol in the URL.
- `tildeSymbol`: The presence of the "~" symbol in the URL.
- `numUnderscore`: The number of underscores ("_") in the URL.
- `numPercent`: The number of percent symbols (%) in the URL.
- `numQueryComponents`: The number of components in the URL query.
- `numAmpersand`: The number of ampersand symbols (&) in the URL.
- `numHash`: The number of hash symbols (#) in the URL.
- `numDigits`: The number of digits in the URL.
- `https`: The presence of "https" in the URL.
- `ipAddress`: The presence of an IP address in the URL.
- `domainInSubdomains`: The presence of the domain within subdomains of the URL.
- `domainInPaths`: The presence of the domain in the URL paths.
- `httpsInHostname`: The presence of "https" in the hostname of the URL.
- `hostnameLength`: The length of the hostname in the URL.
- `pathLength`: The length of the URL path.
- `queryLength`: The length of the query component in the URL.
- `doubleSlash`: The presence of double slashes "//" in the URL.
- `type`: The type or classification of the URL.
  
  

### Supported Tasks

1. **URL Classification:** Train a model to categorize URLs into different classes (benign, phishing, malware, defacement) based on provided attributes.

2. **Anomaly Detection:** Use anomaly detection techniques to identify unusual or suspicious URLs that deviate from the norm.

3. **Malicious URL Detection:** Create a binary classifier to detect whether a given URL is malicious (phishing, malware, defacement) or not.

4. **Feature Engineering:** Explore techniques to create new attributes or modify existing ones to enhance model performance.

5. **URL Length Prediction:** Train regression models to predict the length of a URL based on its features.

6. **HTTPS Detection:** Develop a classifier to determine if a URL uses HTTPS encryption.

7. **IP Address Detection:** Build a model to detect the presence of IP addresses within URLs, crucial for phishing detection.

8. **Query Component Analysis:** Predict characteristics of the query component in URLs, such as length or specific query parameters.

9. **URL Clustering:** Apply unsupervised learning techniques (e.g., k-means clustering) to group similar URLs together.

10. **Cross-Domain Analysis:** Investigate relationships between attributes like domain presence in subdomains or paths and URL types.

## Dataset Structure

### Data Instances

The MaliciousURLs dataset (original) is a CSV file containg data in this format:

```
url,type
br-icloud.com.br,phishing
```

The pre-processed dataset where there are extracted features is also a CSV file containg data in this format:

```
url,numDots,subdomainLevel,pathLevel,urlLength,numDash,atSymbol,tildeSymbol,numUnderscore,numPercent,numQueryComponents,numApersand,numHash,numDigits,https,ipAddress,domainInSubdomains,domainInPaths,httpsInHostname,hostnameLength,pathLength,queryLength,doubleSlash,type
https://spdtextile.com/sport/133Cl2.exe,2,0,2,39,0,False,False,0,0,0,0,0,4,True,False,False,False,False,14,17,0,False,malware
```

### Data Splits

Data has been splitted with the hold-out method (using `sklearn` with seed equal to `2`). A 80-20 split has been done on MaliciousURLs pre-processed dataset to create the training set and the test set.

|                | Train | Test |
| -------------- | ----- | ---- |
| Number of URLs | 16000 | 4000 |

## Dataset Creation

### Curation Rationale

The main motivation for creation of the dataset was to unify in a single dataset more datasets related to phshing/malware/spam/defacement URLs. For our proposes starting from this dataset we created a new dataset containing useful features for the purpose of training machine learning models.

#### Initial Data Collection and Normalization

URLs data are collected from following sources:

- [URL dataset (ISCX-URL-2016)] (https://www.unb.ca/cic/datasets/url-2016.html)
- [Malware domain black list dataset] (https://www.kaggle.com/datasets/thedevastator/dataset-for-protecting-your-network-against-mali)
- [faizan git repo] (https://github.com/faizann24/Using-machine-learning-to-detect-malicious-URLs/tree/master/data)
- [Phishtank dataset] (https://www.phishtank.com/developer_info.php)
- [PhishStorm dataset] (https://research.aalto.fi/en/datasets/phishstorm--phishing--legitimate-url-dataset(f49465b2-c68a-4182-9171-075f0ed797d5).html)

### Annotations

#### Annotation process

The annotation process for the rubbish class was manually performed by the creator of different datasets used as sources.

## Considerations for Using the Data

### Discussion of Biases

We have retained the Benign class, while the other classesrepresenting malicious URLs we have grouped into a single class called malicious. It is evident that the dataset is not balanced at all:

- 420080 benign URLs
- 224960 malicious URLs

this could give biased problems for the machine learning models used later, so we balanced the dataset by selecting ten thousand examples for each of the two classes doing a sampling on the original dataset and saving this new dataset in a
csv file. Starting from this new dataset we proced with pre-processing to extract features.

### Other Known Limitations

Malicious URLs dataset has the following limitations:
- It does not consider textual content of each website (using NLP tecniques)
- It does not consider textual content of each URL (using NLP tecniques)
- We did not conduct a website-by-website security audit, we relied on the url classification given by the authors of the dataset
- Having grouped malicious URLs in a single label (as proupose of binary classification task), we cannot distinguish malware/spam/defacement/phishing URLs as in the original dataset
- The dataset is not updated with more recent malicious URLs



## Additional Information

### Dataset Curators
Dataset has been curated by Manu Siddhartha


### Contributions
Thanks to [sid321axn](https://github.com/sid321axn) for adding this dataset.