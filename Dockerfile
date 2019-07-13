# Base image
FROM trilon/angular-cli as base

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

# yarn generate-version needs too much files from the workspace which renders the caching above useless
RUN DONT_GENERATE_VERSION=1 yarn install --network-timeout 1000000 && yarn cache clean

COPY . /workspace
RUN yarn install
RUN yarn build

# Build the final image
FROM node:12.6.0-alpine

WORKDIR /workspace

COPY --from=base /workspace/node_modules /workspace/node_modules
COPY --from=base /workspace/dist /workspace/dist
COPY --from=base /workspace/package.json /workspace/package.json

CMD node dist/apps/api/main
