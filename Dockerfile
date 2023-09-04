
FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

COPY webpack.config.js ./

COPY public ./public/

COPY src ./src/

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]