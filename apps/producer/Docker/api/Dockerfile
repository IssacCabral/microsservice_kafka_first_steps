FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD ["npm", "run", "producer"]