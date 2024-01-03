FROM python:3.9-slim

WORKDIR /locust

RUN pip install locust

COPY . /locust

EXPOSE 8089

CMD ["locust", "--host=http://flask_api:5000"]