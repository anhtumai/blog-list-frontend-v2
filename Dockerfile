FROM node:14

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install --production

COPY . ./

CMD ["npm", "start"]
