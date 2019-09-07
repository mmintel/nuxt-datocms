# datocms

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Connects DatoCMS with Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `datocms` dependency to your project

```bash
yarn add datocms # or npm install datocms
```

2. Add `datocms` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'datocms',

    // With options
    ['datocms', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Marc Mintel <marc@mintel.me>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/datocms/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/datocms

[npm-downloads-src]: https://img.shields.io/npm/dt/datocms.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/datocms

[circle-ci-src]: https://img.shields.io/circleci/project/github/.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/

[codecov-src]: https://img.shields.io/codecov/c/github/.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/datocms.svg?style=flat-square
[license-href]: https://npmjs.com/package/datocms
