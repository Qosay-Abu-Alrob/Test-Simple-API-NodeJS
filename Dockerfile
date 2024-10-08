FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=4000

EXPOSE 4000

CMD ["node", "dist/app.js"]
