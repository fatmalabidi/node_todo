
# define from what image we want to build from. (This image comes with Node.js and NPM already installed)
FROM node:12

# Create app directory to hold the application code inside the image(this will be the working directory for your application)
WORKDIR /usr/src/app

# Install app dependencies
# can be replaced by 
COPY package*.json ./
# COPY package.json ./
# COPY package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# the npm ci command, specified in the comments, helps provide faster, reliable, reproducible builds for production environments

# Bundle app source
COPY . .

EXPOSE 8080

# define the command to run your app using CMD which defines your runtime.
CMD [ "node", "server.js" ]
