FROM node:10.22.0-alpine

RUN mkdir -p /usr/src/badmonsterarts-vue
WORKDIR /usr/src/badmonsterarts-vue

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/badmonsterarts-vue/
RUN yarn install

RUN yarn build

EXPOSE 3000

ENV HOST=0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
