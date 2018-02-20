import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  entry: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      __dirname + '/../client/index.js'
    ],
    devtool: 'source-map',
    output: {
      filename: 'bundle.js'
    },
    target: 'node',
  module: {
    loaders: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[local]__[hash:base64:5]",
            minimize: false
          }
        },
        { loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')]
  } },
      ]
    }]
  },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
});
