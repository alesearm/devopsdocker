FROM node:20.10.0

# Create app directory
WORKDIR /usr/src/app

# Copy app
COPY . .

# Install
RUN npm install

# Docker Run Command
EXPOSE 8060
CMD [ "node", "server.js" ]