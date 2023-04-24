FROM nginx:stable-alpine
EXPOSE 80
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
