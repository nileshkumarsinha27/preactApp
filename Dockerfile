# Base node image for building react 
FROM node:alpine as builder

# Maintainer details
MAINTAINER Shashank S Shetty <smile.shashank.s.shetty1996@gmail.com>

# Working director in docker image
WORKDIR '/app'

# Copying package.json and package-lock.json file to image
COPY package.json .

# Installing all the dependance
RUN npm install

# Copying content from host system to docker image
COPY . .

# Building static content
RUN npm run build

# Base nginx image for server
FROM nginx

# Exposing port 80 of image to host system
EXPOSE 80

# Moving static content from 
COPY --from=builder /app/build /usr/share/nginx/html
