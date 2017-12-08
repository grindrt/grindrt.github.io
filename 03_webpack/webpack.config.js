
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
     entry: ["element-dataset", "whatwg-fetch", "babel-polyfill", "./src/js/script.js"],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                exclude: /(node_modules)/,
                 query: {
                     presets: ['es2015']
                 }
             }
         ],
         rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
     },
        plugins: [
            new ExtractTextPlugin('style.css')
        ],
     stats: {
         colors: true
     },
     devtool: 'source-map'
//  watch: true
}