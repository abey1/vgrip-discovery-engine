FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npx playwright install chromium --with-deps

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

# CMD ["npm", "run", "dev"]
# CMD ["./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]