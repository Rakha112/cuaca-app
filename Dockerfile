# 1. Install
FROM node:alpine AS install

# Set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

RUN npm ci --no-audit

# 2. Build
FROM node:alpine as build

COPY --from=install /app/node_modules/ /app/node_modules

WORKDIR /app

COPY . /app

ARG REACT_APP_API_URL

ARG REACT_APP_API_KEY

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

RUN npm run build
