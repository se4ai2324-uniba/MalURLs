# Use a lightweight Node image
FROM node:21-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and pnpm-lock.yaml to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Copy the rest of the application code
COPY . .

RUN npm install -g pnpm

# Build the Svelte app
RUN npm install

# Expose the port on which the app will run
EXPOSE 5173

# Start the Svelte app with host specified
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
