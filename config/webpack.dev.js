const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devConfig = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};

module.exports = merge(commonConfig, devConfig);
