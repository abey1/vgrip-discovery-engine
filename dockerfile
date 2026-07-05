FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx playwright install --with-deps

EXPOSE 3000

CMD ["npm", "run", "dev"]