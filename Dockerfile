FROM node:16.19.0-buster as compilacion

WORKDIR /app

COPY . /app

ENV REACT_APP_STORE_KEY=
ENV REACT_APP_API=

RUN npm install

RUN npm run build

FROM nginx:1.22.1-alpine

## COPY nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compilacion /app/build /usr/share/nginx/html