# FROM node:10@sha256:8c94a0291133e16b92be5c667e0bc35930940dfa7be544fb142e25f8e4510a45 AS node
FROM docker.mci.dev/node:18-alpine

ARG NODE_ENV=development

ARG GOOGLE_ANALYTICS_API_ID

ARG SENTRY_DSN

ARG FARM_CORE_URL

## envs
ARG REPO_READONLY_USERNAME

ARG REPO_READONLY_PASSWORD

ARG AUTH_TOKEN

ARG AROUND_URL

ARG WEATHER_URL

ENV GOOGLE_ANALYTICS_API_ID=$GOOGLE_ANALYTICS_API_ID

ENV SENTRY_DSN=$SENTRY_DSN

ENV FARM_CORE_URL=$FARM_CORE_URL

ENV AROUND_URL=$AROUND_URL

ENV WEATHER_URL=$WEATHER_URL

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

RUN npm config set registry https://repo.mci.dev/artifactory/api/npm/npm

RUN yarn config set registry https://repo.mci.dev/artifactory/api/npm/npm

RUN npm set _authToken $AUTH_TOKEN

RUN yarn config set _authToken $AUTH_TOKEN

RUN npm config fix

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn add @swc/core-linux-musl

RUN npm i supervisor-sdk@2.0.0 --legacy-peer-deps

COPY . .

RUN mkdir -p /home/node/app/dist

EXPOSE 3000

RUN yarn build

ENTRYPOINT [ "npx", "next", "start" ]

CMD [ "-p", "3000" ]
