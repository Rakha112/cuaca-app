# 1. For build React app
FROM node:alpine as build

# Set working directory
WORKDIR /app

# Copy all package.json
COPY package*.json ./

# Same as npm install
RUN npm install

COPY . .

ARG REACT_APP_API_URL

ARG REACT_APP_API_KEY

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

RUN npm run build

# # 2. Copy only the build folder
FROM node:alpine as final

ARG REACT_APP_API_URL

ARG REACT_APP_API_KEY

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

WORKDIR /app

COPY --from=build /app/build /app/build
