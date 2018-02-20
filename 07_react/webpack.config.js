let webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    client: [
     'babel-polyfill',
     './src/client/index.js',
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: process.env.NODE_ENV !== 'production'
          ? 'react-hot-loader/webpack!babel-loader'
          : 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
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
