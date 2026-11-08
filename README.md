**Dev Connector**
*A social network for developers*
Practice with MERN front to back: Full Stack React, Redux & Node.js

**Stack**

- Backend: Node.js 26 LTS, Express 5, Mongoose 9 (MongoDB)
- Frontend: React 19, React Router 7, Redux Toolkit, Vite

**Requirements**

- Node.js >= 26 (`nvm use` reads `.nvmrc`)
- MongoDB (local, Docker, or Atlas)

**Install**

```bash
npm install
npm install --prefix client
```

**Config**

Settings are read by [`config`](https://github.com/node-config/node-config). Either create
`config/default.json` (gitignored):

```json
{
  "mongoURI": "mongodb://localhost:27017/devconnector",
  "jwtSecret": "your_secret_key",
  "githubToken": "optional_github_token"
}
```

or set environment variables (also loaded from `.env`, see `.env.example`):
`MONGO_URI`, `JWT_SECRET`, `GITHUB_TOKEN`, `PORT`.

Quick local MongoDB: `docker run -d --name devconnector-mongo -p 27017:27017 mongo:8`

**Run (development)**

```bash
npm run dev       # API on :5050 (node --watch) + Vite on :3000 with /api proxy
npm run server    # API only
npm run client    # Vite only
```

**Test, lint, build**

```bash
npm test --prefix client
npm run lint --prefix client
npm run build --prefix client   # outputs client/build
```

**Production**

```bash
npm run build --prefix client
NODE_ENV=production npm start   # serves API + client/build
```

**Course Online:**

Course: https://www.udemy.com/course/mern-stack-front-to-back/
