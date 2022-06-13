FROM node:16.15
RUN apt-get update -qq && apt-get install -y yarn openssl
RUN mkdir /web_app
WORKDIR /web_app
COPY package.json yarn.lock ./
RUN export NODE_ENV=production
RUN yarn install --production
COPY . .
RUN yarn prisma generate --schema ./prisma/schema.prisma
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
