const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        "babel-polyfill",
        './src/app/app.js'
    ],
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_module/,
                    /public/
                ],
                loader: ['babel-loader']
            }
        ]
    },
    devServer: {
        port: 7788,
        contentBase: './'
    }
}