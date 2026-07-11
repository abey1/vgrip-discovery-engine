FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npx playwright install chromium --with-deps


# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]