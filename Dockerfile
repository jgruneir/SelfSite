FROM node:12

COPY ./dist ./dist

RUN npm install -g serve
ENTRYPOINT ["serve", "-s", "dist"]