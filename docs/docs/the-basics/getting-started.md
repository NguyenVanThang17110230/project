---
id: getting-started
title: Getting started
---

## Project setup

- Create `.env` file by copying from `example.env` and update the environment
  variables in your favor.
- Search for text `TODO-IMPORTANT` in the whole code base and follow instruction
  comments to make your change in your favor , then remove `TODO-IMPORTANT`
  line.
- Update `.gitignore` to ignore some files or folders generated by your IDE.
- Update `package.json` to set new name, version, license, author(s),... for
  your project.

## Start localhost server and watch changes

```bash
npm install
npm run dev
```

- Access web via `localhost:${PORT}`
- Access APIs explorer via `localhost:${PORT}/explorer`
- Access documentation via `localhost:3001`

_Note: `${PORT}` is specified in `.env` file._

## Test production build on localhost

To run app on real production environment, we need to compile original codebase
into an optimized code bundle. Sometimes, you may want to test the build on your
local PC. To do that, follow below steps:

```bash
npm run build

# Important: You can update .dist/.env to have production environment config
# if you want.
cp .env .dist/.env

cd .dist
npm install --production
NODE_ENV=production node server/server.js
```

## Run localhost with docker

- [Install Docker](https://docs.docker.com/engine/installation/)

- [Install docker-compose](https://docs.docker.com/compose/install/#install-compose)
- **Running**

```
docker-compose build (only run in the first time)
docker-compose up -d mongo
docker-compose up app
```

- **Note**: docker-compose on **Mac OS** sometimes has slow network issue,
  temporary solution is copy lines below to `/etc/hosts` file

```
127.0.0.1 localunixsocket
127.0.0.1 localunixsocket.lan
127.0.0.1 localunixsocket.local
```

## Code style (you MUST follow)

- Javascript code style:
  - StandardJs (https://standardjs.com) is used. It will reject your commit if
    your code does not follow the code style standard.
- CSS code style:
  - BEM (http://getbem.com)
  - Standard stylelint (https://github.com/stylelint/stylelint-config-standard)
    will reject your commit if your style code has lint issues.
- Commit style:
  - Commitlint (https://github.com/marionebl/commitlint) is used, it will reject
    your commit message if it is invalid.
  - You commit message must follow https://www.conventionalcommits.org.
  - Allowed commit types are: (reference:
    https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
    - **build**: Changes that affect the build system or external dependencies
      (example scopes: gulp, broccoli, npm)
    - **ci**: Changes to our CI configuration files and scripts (example scopes:
      Circle, BrowserStack, SauceLabs)
    - **docs**: Documentation only changes
    - **feat**: A new feature
    - **fix**: A bug fix
    - **perf**: A code change that improves performance
    - **refactor**: A code change that neither fixes a bug nor adds a feature
    - **style**: Changes that do not affect the meaning of the code
      (white-space, formatting, missing semi-colons, etc)
    - **test**: Adding missing tests or correcting existing tests
    - **chore**: Updating grunt tasks etc; no production code change

## Built-in features

- Single page app + server side rendering + code splitting
- Basic sign up, login, logout, reset password, profile management screens
- Admin portal with basic user management and configuration management
- Unit test, integration test, e2e test with high test coverage
- Using dotenv for environment variables on local development
  (https://github.com/motdotla/dotenv)