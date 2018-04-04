// const { resolve } = require('path');
// module.exports = {
//     entry: [
//         'angular',
//         resolve('src', 'app.js')
//     ],
//     output: {
//         path: resolve('dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.html$/,
//                 use: 'html-loader'
//             }
//         ]
//     },
//     plugins: [
//         htmlWebpackPlugin
//     ],
//     stats: {
//         colors: true
//     },
//     devServer: {
//         historyApiFallback: true
//     },
//     devtool: 'source-map'
// };


const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  APP: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(paths.APP, 'app.js')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
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
      template: 'index.html',
      inject: true,
      minify: false
    })
  ],
  stats: {
      colors: true
  },
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
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map'
};