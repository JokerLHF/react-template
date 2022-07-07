const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const devConfig = {
  devtool: false,

  mode: 'development',

  devServer: {
    host: '0.0.0.0',
    port: 9001,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = merge(commonConfig, devConfig)