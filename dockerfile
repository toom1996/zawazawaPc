
# 使用alpine构建
FROM node:lts-alpine3.13

LABEL toom1996 <1023150697@qq.com>

# 设置npm 源
RUN \
npm config set registry https://registry.npm.taobao.org \
# 安装webpack
&& npm install webpack -g \ 
# 安装vue-cli
&& npm install -g @vue/cli

# 创建工作目录
RUN mkdir -p /wwwroot/zawazawa_frontend

WORKDIR /wwwroot/zawazawa_frontend

# 给这个目录执行权限，x是执行权限
RUN chmod +x /wwwroot/zawazawa_frontend

VOLUME /wwwroot/zawazawa_frontend

EXPOSE 6688

