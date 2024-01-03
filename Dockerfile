# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# copy of files of the api
COPY /src /app/src
COPY /data /app/data
COPY /models /app/models
COPY docker_requirements.txt  /app/docker_requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install -r docker_requirements.txt

# port to expose
EXPOSE 5000

# Run main.py when the container launches
CMD ["python", "src/api/main.py"]