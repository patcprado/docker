FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y nodejs npm git nano && \
    npm install -g n

WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js ./

RUN npm install

EXPOSE 80

CMD ["node", "app.js"]