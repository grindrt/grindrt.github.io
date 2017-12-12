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
		"whatwg-fetch",
		"babel-polyfill",
		"./js/app.js"
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
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
						},
            {
							loader: "sass-loader"
						}
					]
				})
			},
		]
	},
	plugins: [
		extractSass,
    new webpack.optimize.ModuleConcatenationPlugin()
	],
  devServer: {
    compress: true
  }
}
