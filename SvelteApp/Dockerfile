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

RUN npm run build

ENV HOST=0.0.0.0
EXPOSE 4173

CMD ["npm","run", "preview","--", "--host", "0.0.0.0"]
