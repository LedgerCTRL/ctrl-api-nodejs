FROM node

COPY . /ctrl-src/
WORKDIR /ctrl-src

EXPOSE 8088

RUN npm run prestart
CMD NODE_ENV=production npm run start