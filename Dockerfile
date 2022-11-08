FROM node:lts-alpine as build

COPY . /axiom-web

WORKDIR /axiom-web

RUN npm install

RUN npm run build:ssr

FROM node:lts-alpine as run

COPY --chown=node:node --from=build /axiom-web/dist ./dist

EXPOSE 4000

CMD [ "node", "dist/axiom-web/server/main.js" ]
