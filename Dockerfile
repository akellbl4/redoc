FROM node:16-alpine as build

WORKDIR /web
COPY ./ /web/
RUN pnpm install
