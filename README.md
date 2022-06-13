## Running docker

Prerequisite: Docker, Node

First, run the server:

```bash
yarn
docker build
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running in dev mode

You can

```bash
cp .env.local.example .env.local
yarn
docker compose up db
yarn dev
```
