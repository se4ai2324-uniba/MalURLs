# Use a lightweight Node image
FROM node:21-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and pnpm-lock.yaml to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Copy the entire node_modules folder
COPY node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install -g pnpm

# Build the Svelte app
RUN pnpm install

# Expose the port on which the app will run
EXPOSE 5167

# Start the Svelte app
CMD ["pnpm", "run", "dev"]
