<h1 align="center">
  Spotify React Web (Clone)
  <img alt="Read me" src="https://iili.io/HXJEfiG.md.png" />
</h1>

## Technologies
Project is created with:
* Vite: 4.1.0
* ReactJS: 18.2.0
* Redux-toolkit: 2.9.11
* React-hook-form: 7.43.5
* React-i18next: 12.2.0
* TypeScript: 4.9.3
* Eslint: 8.31.0
* Prettier: 2.8.1

## Setup
```
yarn | npm install
```

## Create a global <code>.env.{development|staging|production}</code> file from .env.example
<code>.env.development</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=http://localhost:8080/
```

<code>.env.staging</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=https://localhost:8080/stag
```

<code>.env.production</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=https://localhost:8080/prod
```

### Compiles and hot-reloads for development
```
yarn dev | npm run dev
```

### Compiles and build each of environments
```
yarn build:development | npm run build:development
yarn build:staging | npm run build:staging
yarn build:production | npm run build:production
```

### Lints and fixes files
```
yarn lint | npm run lint
```

## Commit guide and changelog
See more [COMMIT_GUIDE.md](COMMIT_GUIDE.md) and [CHANGELOG.md](CHANGELOG.md).

### Show your support
Give a ⭐ if you like this website!

## License
Copyright by [Chain Nguyễn](https://chainnguyen.github.io/chain-curriculum-vitae/).

Shout-out to Spotify's team [Spotify](https://open.spotify.com/)
