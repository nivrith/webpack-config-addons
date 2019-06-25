# webpack-config-addons

[![CircleCI](https://circleci.com/gh/nivrith/webpack-config-addons/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/webpack-config-addons/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/webpack-config-addons.svg)](https://www.npmjs.com/package/webpack-config-addons)
[![node](https://img.shields.io/node/v/webpack-config-addons.svg)](https://www.npmjs.com/package/webpack-config-addons)
[![License MIT](https://img.shields.io/github/license/nivrith/webpack-config-addons.svg)](https://github.com/nivrith/webpack-config-addons/blob/master/LICENSE)

A webpack utility for composing addon configurations for creating config presets by leveraging webpack merge and functional composition

## Prerequisites

- Addon config files must be in a folder named **`addons`** relative to **`webpack.config.js`** path

- Addon name must be passed in as webpack-cli argument  --env.addons=exampleaddon

- Addon files must be named in the follow the format of `webpack.${addonName}.js`. For example, if you want to create a preset for typescript loader you can name your addon `typescript` , then name of the addon file should be  `webpack.typescript.js` and webpack should be passed in --env.addon=typescript

- Addon configs must be a commonJS module that returns a function which takes webpack env as and argument and returns a config object (see examples in usage)

## Usage

> Get addon configs from addons folder relative to webpack.config.js

~~~ js
// project root

  project/
├── addons/
│   ├── webpack.html.js
│   └── webpack.jarvis.js
├── webpack.config.js
~~~

~~~ bash
# run webpack with --env flag and pass addon names
$ npx webpack --env.addons=html --env.addons=jarvis
~~~

```js

// webpack.config.js


const getAddons = require('webpack-config-addons');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  const addonsConfig = getAddons(env);
  const config = {
      entry: 'src/index.js'
      ...
  };
  const mergedConfig = webpackMerge(config, addonsConfig);
  return mergedConfig;
};

/** merged config :

 {
  entry: 'src/index.js',
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: false,
      hash: true,
      filename: `index.html`
    }),
    new Jarvis({
        port: 9090 // optional: set a port
    })
  ]
}

*/



// webpack.html.js

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: false,
      hash: true,
      filename: `index.html`
    })
  ]
});

//webpack.jarvis.js

const Jarvis = require('webpack-jarvis');

module.exports = (env) => ({
    plugins: [
      new Jarvis({
        port: 9090 // optional: set a port
      })
    ]
});

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
