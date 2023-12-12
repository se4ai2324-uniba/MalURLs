import time
from locust import HttpUser, task, between

class TestUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def get_features(self):
        self.client.post('/get_features', json={"url":"www.google.it"}, name="Get Features")
        '''x = self.client.post('/get_features', json={"url":"www.google.it"})
        y = x.json()
        print(y)'''

    @task
    def get_models(self):
        self.client.get('/models', name="Get Models")

    @task
    def scan(self):
        self.client.post('/scan', json={"url":"www.google.it","model":"base_rf"}, name="Scan")

        