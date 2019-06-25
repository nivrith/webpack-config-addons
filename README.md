# webpack-config-addons

[![CircleCI](https://circleci.com/gh/nivrith/webpack-config-addons/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/webpack-config-addons/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/webpack-config-addons.svg)](https://www.npmjs.com/package/webpack-config-addons)
[![node](https://img.shields.io/node/v/webpack-config-addons.svg)](https://www.npmjs.com/package/webpack-config-addons)
[![License MIT](https://img.shields.io/github/license/nivrith/webpack-config-addons.svg)](https://github.com/nivrith/webpack-config-addons/blob/master/LICENSE)

Get absolute path to the module that required your module

## Usage

> Get Absolute Path of Parent Module

~~~ js
// project root

  ├── index.js
  ├── foo.js
  ├── bar.js
  └── baz.js
~~~

```js

// index.js (entry point of app)

const foo = require('./foo')

// foo.js

const bar = require('./bar');

// bar.js

const requiredFrom = require('webpack-config-addons');

const requireDirectory = requiredFrom();

console.log(requiredDirectory); // /absolute/path/to/foo.js

```

**Note:** *It will throw an error if you try to call it from a module that is not required by a parent module during runtime.*

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
