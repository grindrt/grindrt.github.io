var path = require('path');
var webpack = require('webpack');

module.exports = {
     entry: ["element-dataset", "whatwg-fetch", "babel-polyfill", "./js/script.js"],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
//  watch: true
}
