var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractJSON = new ExtractTextPlugin("result.json");
var extractCSS = new ExtractTextPlugin("bundle.css");

module.exports = {
	entry: {
		main: [
			"./src/home/home",
			"./src/common/styles/site.less",
			"./src/feed/styles/feed.less",
			"./src/common/styles/site.less",
			"./src/feed/styles/feed.less",
			"./json/test.json"
		]
	},
	output: {
		path: path.join(__dirname, "/dist"),
		publicPath: "./dist/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|less)/,
				loader: "babel-loader",
				query: {
					presets: ["latest"]
				}
			},
			{
				test: /\.less$/,
				loader: extractCSS.extract("style-loader", "css-loader!less-loader")
			}
		],
		preLoaders: [
			{
				test: /\.json$/,
				loader: extractJSON.extract("custom-loader")
			}
		]
	},
	plugins: [
		extractJSON,
		extractCSS,
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			DEBUG: JSON.stringify(false),
			NEWSAPI_KEY: "2efe5a5999c845a89f9931c0e2fd6735"
		})
	],
	resolveLoader: {
		alias: {
			"custom-loader": path.join(__dirname, "./src/loaders/custom-loader.js")
		}
	},
	devServer: {
		compress: true
	}
};