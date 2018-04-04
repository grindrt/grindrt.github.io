const webpack = require('webpack');
const path = require('path');
const projectRoot = path.resolve(__dirname, '../src/');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                include: [
                    projectRoot
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        extensions: ['.js'],
    },
};