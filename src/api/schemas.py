from pydantic import BaseModel
from enum import Enum

class PredictURL(BaseModel):
    num_dots : float
    num_subdomains : float
    path_level : float
    url_len : float
    num_dash : float
    num_underscore : float
    num_percent : float
    num_query_components : float
    num_ampersands : float
    num_digits : float
    is_https : float
    is_ipaddr : float
    hostname_length : float
    path_length : float
    query_length : float

class URLtype(Enum):
    malicious = 1
    benign =  0