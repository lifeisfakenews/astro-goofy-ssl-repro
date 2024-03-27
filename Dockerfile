FROM node:lts AS runtime
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4073
CMD node ./dist/server/entry.mjs