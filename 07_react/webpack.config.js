let webpack = require('webpack');
let path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BUILD_DIR = path.resolve(__dirname, 'src/public');

let config = {
  // devtool: 'eval',
  entry: {
    client: [
     // 'babel-polyfill',
     APP_DIR + '/index.js',
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      // {
      //   test: /(\.css|\.scss)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ]
      // }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
      'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
      'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY)
    })
 ]
};

module.exports = config;

// module.exports = {
//   devtool: 'eval',
//   entry: {
//     client: [
//      'babel-polyfill',
//      './src/client/index.js',
//     ]
//   },
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js',
//     publicPath: '/dist/'
//   },
//   devtool: 'inline-source-map',
//   module: {
//     loaders: [
//       {
//         test: /(\.js|\.jsx)$/,
//         loader: process.env.NODE_ENV !== 'production'
//           ? 'react-hot-loader/webpack!babel-loader'
//           : 'babel-loader',
//         exclude: [/node_modules/, /public/]
//       },
//       {
//         test: /(\.css|\.scss)$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
//       'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
//       'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY)
//     })
//  ]
// };
