const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

module.exports = {
	entry: [
		"element-dataset",
		"whatwg-fetch",
		"babel-polyfill",
		"./js/app.js"
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				exclude: /(node_modules)/
			},
			{
				test: /\.jpe?g$/,
				loader: 'file-loader'
			}
		],
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: extractSass.extract({
					use: [
						{
							loader: "css-loader"
						}, {
							loader: "sass-loader"
						}
					],
					// use style-loader in development
					fallback: "style-loader"
				})
			},
		]
	},
	plugins: [
		extractSass
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
	//watch: true
}
