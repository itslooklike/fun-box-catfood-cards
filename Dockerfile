FROM node:8 AS build
WORKDIR /app
COPY . /app
RUN npm i -g yarn && yarn && yarn build

FROM node:8-alpine
WORKDIR /app
RUN npm i -g serve
COPY --from=build /app/build ./build
EXPOSE 8080
CMD ["serve", "-s", "build", "-p", "8080"]
