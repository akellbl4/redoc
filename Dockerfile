FROM node:16-alpine as build

WORKDIR /site
COPY ./ /site
RUN pnpm install
