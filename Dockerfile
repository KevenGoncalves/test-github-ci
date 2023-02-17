FROM node:18.14

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

ENV SERVER_PORT = 8080

EXPOSE 8080

CMD ["pnpm","start"]
