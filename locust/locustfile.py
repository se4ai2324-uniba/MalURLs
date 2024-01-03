from locust import HttpUser, task, between
import csv
import random

data = "urls_test.csv"

def choose_random_url_from_csv():
    with open(data, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)

        urls = [row[0] for row in reader]

    # Rimuovi eventuali spazi bianchi o caratteri di nuova riga
    urls = [url.strip() for url in urls]

    # Scegli un URL casualmente
    random_url = random.choice(urls)

    return random_url


class TestUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def get_features(self):
        self.client.post('/get_features', json={"url": choose_random_url_from_csv()}, name="Get Features")

    @task
    def get_models(self):
        self.client.get('/models', name="Get Models")

    @task
    def scan(self):
        self.client.post('/scan', json={"url": choose_random_url_from_csv(), "model": "base_rf"}, name="Scan")