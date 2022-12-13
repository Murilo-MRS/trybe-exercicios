 FROM node:16
 WORKDIR /
 COPY . .
 RUN npm install
 # o expose serve apenas para sinalizar em qual porta rodaremos o container
 # a definição da porta se dá no arquivo docker-compose.yaml
 EXPOSE 3000
 CMD [ "npm", "start" ]