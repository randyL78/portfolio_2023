const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const prodConfig = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/latest/',
  },
};

module.exports = merge(commonConfig, prodConfig);
