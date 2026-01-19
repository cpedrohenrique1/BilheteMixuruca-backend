FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine AS prod
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/package*.json .
RUN npm ci --omit=dev
COPY --from=builder /app/dist .
EXPOSE 3000
ENTRYPOINT ["node", "main.js"]