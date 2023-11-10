from urllib.parse import urlparse, urlsplit
import tldextract
import requests

#
# Number of character '.' in URL
# Return: numeric
#
def count_dots(url: str):
    return url.count('.')


#
# Number of subdomain levels
# Return: numeric
#
def count_subdomains(url: str):
    subdomain = tldextract.extract(url).subdomain
    return len(subdomain.split('.')) if len(subdomain) != 0 else 0


#
# The depth of URL
# Return: numeric
#
def get_path_level(url: str):
    path = urlsplit(url).path
    path = path[1:] if len(path) > 0 and path[0] == '/' else path
    path = path[:-1] if len(path) > 0 and path[-1] == '/' else path
    return len(path.split('/')) if len(path) > 0 else 0

#
# The length of URL
# Return: numeric
#
def get_len(url: str):
    return len(url)


#
# Number of the dash character '-' in URL
# Return: numeric
#
def count_dash(url: str):
    return url.count('-')

#
# Number of the underscore character '_' in URL
# Return: numeric
#


def count_underscore(url: str):
    return url.count('_')


#
# Number of the percent character '%' in URL
# Return: numeric
#
def count_percent(url: str):
    return url.count('%')


#
# Number of the query components
# Return: numeric
#
def count_query_components(url: str):
    query_components = urlparse(url).query.split(
        "&") if len(urlparse(url).query) > 0 else ''
    return len(query_components)


#
# Number of the ampersand character '&' in URL
# Return: numeric
#
def count_ampersand(url: str):
    return url.count('&')

#
# Number of the numeric character
# Return: numeric
#
def count_digits(url: str):
    return sum(c.isdigit() for c in url)

#
# Check if there exists a HTTPS in website URL
# Return: boolean
#
def check_Https(url: str):
    try:
        req = requests.get(url, timeout=1).url
        return req.startswith('https')
    except Exception as e:
        return False

#
# Check if the IP address is used in the hostname of the website URL
# Return: boolean
#
def check_IP_address(url: str):
    return not bool(sum(not c.isdigit() and c != '.' for c in tldextract.extract(url).domain))


#
# Length of hostname
# Return: numeric
#
def get_hostname_length(url: str):
    return len(urlsplit(url).netloc)


#
# Length of the link path
# Return: numeric
#
def get_path_length(url: str):
    return len(urlparse(url).path)


#
# Length of the query string
# Return: numeric
#
def get_query_length(url):
    return len(urlparse(url).query)

def get_url_features(url:str):
    num_dots = count_dots(url)
    num_subdomains = count_subdomains(url)
    path_level = get_path_level(url)
    url_len = get_len(url)
    num_dash = count_dash(url)
    num_underscore = count_underscore(url)
    num_percent = count_percent(url)
    num_query_components = count_query_components(url)
    num_ampersands = count_ampersand(url)
    num_digits = count_digits(url)
    is_https = check_Https(url)
    is_ipaddr = check_IP_address(url)
    hostname_length = get_hostname_length(url)
    path_length = get_path_length(url)
    query_length = get_query_length(url)

    return {
        "num_dots": num_dots,
        "num_subdomains": num_subdomains,
        "path_level": path_level,
        "url_len": url_len,
        "num_dash": num_dash,
        "num_underscore": num_underscore,
        "num_percent": num_percent,
        "num_query_components": num_query_components,
        "num_ampersands": num_ampersands,
        "num_digits": num_digits,
        "is_https": is_https,
        "is_ipaddr": is_ipaddr,
        "hostname_length": hostname_length,
        "path_length": path_length,
        "query_length": query_length
    }

def get_fetures_list(url:str):

    features_list = []
    features_dict = get_url_features(url)

    for feature in features_dict.keys():
        features_list.append(features_dict[feature])

    return features_list


