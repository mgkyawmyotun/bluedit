FROM node:12-alpine
WORKDIR /bluedit
COPY . . 
RUN npm install && npm run start:web && npm run build:web
RUN  cd packages/web 
CMD [ "npm","start"]
