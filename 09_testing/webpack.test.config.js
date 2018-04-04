const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  APP: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  devtool: 'source-map',
  entry: ['whatwg-fetch', 'babel-polyfill', path.join(paths.APP, 'app.module.js')],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    stats: {colors: true},
    overlay: {errors: true},
    compress: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.APP, 'index.html'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'data/[name].[ext]'}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};