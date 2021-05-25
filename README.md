# jskos-vue-tabs
[![Test and build](https://github.com/gbv/jskos-vue-tabs/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/gbv/jskos-vue-tabs/actions/workflows/test-and-build.yml)
[![GitHub package version](https://img.shields.io/github/package-json/v/gbv/jskos-vue-tabs.svg?label=version)](https://github.com/gbv/jskos-vue-tabs)
[![NPM package name](https://img.shields.io/badge/npm-jskos--vue--tabs-blue.svg)](https://www.npmjs.com/package/jskos-vue-tabs)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

> A simple tabs library for Vue 3.

## Table of Contents <!-- omit in toc -->
- [Development](#development)
- [Usage](#usage)
- [Publish](#publish)
- [License](#license)

## Development
```bash
git clone https://github.com/gbv/jskos-vue-tabs.git
cd jskos-vue-tabs
npm install
npm run dev # for Vite dev server
npm run build # for Vite build
```

## Usage

1\. Add the library to your Vue project:
```bash
npm install jskos-vue-tabs
```

2a. Add all components globally (in `src/main.js` for your project):
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import * as JskosVueTabs from "jskos-vue-tabs"
app.use(JskosVueTabs)

app.mount('#app')
```

## Publish
Please work on the `dev` branch during development (or better yet, develop in a feature branch and merge into `dev` when ready).

When a new release is ready (i.e. the features are finished, merged into `dev`, and all tests succeed), run the included release script (replace "patch" with "minor" or "major" if necessary):

```bash
npm run release:patch
```

This will:
- Check that we are on `dev`
- Run tests and build to make sure everything works
- Make sure `dev` is up-to-date
- Run `npm version patch` (or "minor"/"major")
- Push changes to `dev`
- Switch to `main`
- Merge changes from `dev`
- Push `main` with tags
- Switch back to `dev`

After running this, GitHub Actions will **automatically publish the new version to npm**. It will also create a new GitHub Release draft. Please **edit and publish the release draft manually**.

## License
MIT Copyright (c) 2021 Verbundzentrale des GBV (VZG)
