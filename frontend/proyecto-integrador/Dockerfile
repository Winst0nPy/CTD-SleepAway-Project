FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
ARG API_URL_DOCKER
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]