
FROM node:14.16.0-buster

LABEL toom1996 <1023150697@qq.com>

RUN \
npm install yarn -g \
yarn global add nrm && \
nrm use taobao &&\
yarn global add vue-cli &&\
yarn global add cross-env
