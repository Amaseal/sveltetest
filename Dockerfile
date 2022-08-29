# stage build
FROM node:16.9.1-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
ENV PORT 4000
EXPOSE ${PORT}
CMD ["node", "build"]
