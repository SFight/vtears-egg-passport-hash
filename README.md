# egg-passport-hash

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-hash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-hash
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-hash.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-hash
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-hash.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-hash?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-hash.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-hash
[snyk-image]: https://snyk.io/test/npm/egg-passport-hash/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-hash
[download-image]: https://img.shields.io/npm/dm/egg-passport-hash.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-hash

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-hash --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportHash = {
  enable: true,
  package: 'egg-passport-hash',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportHash = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
