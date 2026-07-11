FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npx playwright install chromium --with-deps

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# CMD ["npm", "run", "dev"]
CMD ["/app/entrypoint.sh"]