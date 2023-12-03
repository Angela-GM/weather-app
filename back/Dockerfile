FROM node:15.4

WORKDIR /app
COPY package*.json .
RUN npm install 
COPY seed/seed.sql /docker-entrypoint-initdb.d/
COPY . .

CMD npm run start:dev