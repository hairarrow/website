const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      path = require('path');

module.exports = {
  entry: { 'app': './scripts/app.js' },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: 'style!css!postcss!sass'},
      {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file!img'},
      {test: /\.(ttf|eot|woff)?$/, loader: 'file'}
    ]
  },
  devtool: 'source-map',
  postcss: function() {
    return [autoprefixer];
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('./scripts'),
      path.resolve('./styles')
    ]
  },
}
