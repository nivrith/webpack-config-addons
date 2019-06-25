const webpackMerge = require('webpack-merge');
const path = require('path');
const requiredFrom = require('required-from');

// const callerDir = module.parent ? path.join(path.dirname(module.parent.filename)) : __dirname;

const callerDir = path.dirname(requiredFrom()) || __dirname;

const defaultOpts = {
  addonsPath: path.join(callerDir, `./addons`)
};

/**
 *
 *
 * @param {{addons: string | string[]}} env
 * @param {{addonsPath: string}} [opts=defaultOpts]
 * @returns {webpackAddonConfig} The Webpack Addon Config
 */
module.exports = (env, opts = defaultOpts) => {
  const { addons } = env;
  const mergedAddons = [].concat(...[addons]).filter(Boolean);
  const addonsDir = path.join( callerDir, opts.addonsPath );

  const mergedConfigs = mergedAddons.map(
    addonName => require(path.join(`${addonsDir}/webpack.${addonName}`))(env)
  );
  return webpackMerge({}, ...mergedConfigs);
};