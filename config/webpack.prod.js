const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.common');

const prodConfig = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/robots.txt', to: '' },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
