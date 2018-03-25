const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
    minify: false
});

module.exports = {
    entry: [
        'angular',
        resolve('src', 'app.js')
    ],
    output: {
        path: resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ],
    stats: {
        colors: true
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'source-map'
};