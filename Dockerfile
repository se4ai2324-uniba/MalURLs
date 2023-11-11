# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Copy the models directory into the container at /app
COPY models /app/models

# Install any needed packages specified in requirements.txt
RUN pip install -r docker_requirements.txt

# port to expose
EXPOSE 5000

# Run main.py when the container launches
CMD ["python", "src/api/main.py"]