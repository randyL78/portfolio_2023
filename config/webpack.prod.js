const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.common');

const prodConfig = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/latest/',
  },
  plugins: [
    new CopyPlugin([
      { from: 'public/robots.txt', to: 'dist' },
    ]),
  ],
};

module.exports = merge(commonConfig, prodConfig);
