const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './scripts/app.js',
    'styles': './styles/main.scss'
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss!sass')
      },
      {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file!img'},
      {test: /\.(ttf|eot|woff)?$/, loader: 'file'}
    ]
  },
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
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
