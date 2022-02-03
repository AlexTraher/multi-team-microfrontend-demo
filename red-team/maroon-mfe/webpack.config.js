const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const pkg = require('./package.json');
const webpack = require('webpack');
const { version } = pkg;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cjsi",
    projectName: "navy-mfe",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = defaultConfig.externals.filter((ext) => !['react', 'react-dom'].includes(ext));

  return merge(defaultConfig, {
    output: {
      filename: `cjsi-maroon-mfe.${version}.js`
    },
    plugins: [new webpack.DefinePlugin({
      version: JSON.stringify(version),
    })],
    // modify the webpack config however you'd like to by adding to this object
  });


};
