---
id: deployment
title: Deployment
---

## Versioning before deployment

You should consider increasing you system version following
[Semantic Versioning](https://semver.org)

```bash
npm version <major|minor|patch>
git push && git push --tags
```

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes. Additional labels
  for pre-release and build metadata are available as extensions to the
  MAJOR.MINOR.PATCH format.

## Run your build on localhost before deployment (optional)

Reference to
[Run your build on localhost](getting-started#run-your-build-on-localhost)

## Deploy to staging

```bash
git checkout develop
git pull origin develop

# major: big changes, minor: small changes, patch: very small changes, bug fixes
npm version [<newversion> | major | minor | patch]

git checkout release/staging
git pull origin release/staging
git merge develop
git push origin release/staging
./.deploy/deploy-staging.sh
git checkout develop
```

## Deploy to production

```bash
git checkout release/production
git pull origin release/production
git merge develop
git push origin release/production
./.deploy/deploy-production.sh
git checkout develop
```
