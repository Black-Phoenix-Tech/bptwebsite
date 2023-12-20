# Use an official Node.js runtime as a base image
FROM node:18.8

# Set the working directory inside the container
WORKDIR /usr/src/app

# Check if Yarn is already installed
RUN command -v yarn >/dev/null 2>&1 || { npm install -g yarn; }

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port that Next.js will run on (default is 3000)
EXPOSE 3000

# Set the command to run the application
CMD ["yarn", "start"]
