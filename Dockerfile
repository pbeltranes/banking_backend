# Development Dockerfile
# Use an official Node.js runtime as the base image
FROM node:18-alpine AS development

# Create usr/app directory if not exists
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Install development dependencies
COPY package.json package-lock.json ./

RUN npm i

# Copy the source code into the container
COPY . .

# Expose a port for development (e.g., for running a development server)
EXPOSE 4000

# Start the application in development mode
CMD ["npm", "run", "dev"]