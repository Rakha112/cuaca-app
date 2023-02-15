# 1. For build React app
FROM node:alpine AS development

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Same as npm install
RUN npm install

COPY . /app

ARG REACT_APP_API_URL

ARG REACT_APP_API_KEY

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

RUN npm run build