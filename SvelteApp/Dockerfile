# Use a lightweight Node image
FROM node:21-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and pnpm-lock.yaml to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Copy the rest of the application code
COPY . .

# Crea il file .env e scrivi la variabile API_URL
RUN echo "API_URL=http://flask_api:5000/" > /app/.env

# Build the Svelte app
RUN npm install

RUN npm run build

ENV HOST=0.0.0.0
EXPOSE 4173

CMD ["npm","run", "preview","--", "--host", "0.0.0.0"]
