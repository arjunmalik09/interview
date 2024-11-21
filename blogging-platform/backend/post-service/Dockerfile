FROM node:20.17.0-alpine

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000 3000

CMD ["node", "dist/main.js"]
