FROM node:16

WORKDIR /usr/src/app

COPY covid-travel-api .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]