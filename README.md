# Remark42 site

## Work on your local environment

Requirements:

- [Node.js v16](https://nodejs.org/en/) or higher - install from package or with Homebrew
- PNPM 7.9 or higher - once you have Node.js, run `npm i -g pnpm`

### Development

Install dependencies and start the development server:

```shell
pnpm install
pnpm dev
```

### Build

```shell
pnpm build
```

## Work with Docker Compose

### Build

Install dependencies and run development server inside Docker:

```shell
docker-compose build
docker-compose up server
```

Then serve files from `./build` with your favorite server

### Development

```shell
docker-compose up --build server
```

Then head to http://localhost:8080
