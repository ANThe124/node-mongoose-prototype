FROM node:latest
ENV DB_USERNAME=${DB_USERNAME} \
    DB_PASSWORD=${DB_PASSWORD}
RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "app.js"]

# RUN this script when you wake up