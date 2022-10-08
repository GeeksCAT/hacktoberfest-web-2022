FROM node:17.1.0 as build

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:stable

COPY --from=build /app/dist /var/www/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/run.sh /

RUN chmod +x /run.sh

CMD ["./run.sh"]

