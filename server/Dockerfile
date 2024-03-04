FROM node:21-alpine as runner
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
