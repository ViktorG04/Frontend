FROM node:16.19.0-buster as compilacion

COPY . /opt/app

ENV REACT_APP_BACKEND_BASE_URL=http://localhost:5000

WORKDIR /opt/app

RUN npm install

RUN npm run build

FROM nginx:1.22.1-alpine

## COPY nginx config

COPY --from=compilacion /opt/app/build /usr/share/nginx/html