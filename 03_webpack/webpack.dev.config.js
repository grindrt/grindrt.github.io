var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractJSON = new ExtractTextPlugin("result.json");
const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

module.exports = {
  entry: [
		"whatwg-fetch",
		"babel-polyfill",
		"./js/app.js",
    "./_loader/test.json"
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
  module:{
    loaders:[
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
      {
        test: /\.json$/,
        loader:  extractJSON.extract("json-custom-loader")
      }
		]
  },
  plugins: [
    extractSass,
    extractJSON
  ],
  resolveLoader: {
      alias: {
          "json-custom-loader": path.join(__dirname, "./_loader/json-custom-loader.js")
      }
  },
  stats: {
    colors: true
  },
  devServer: {
    hot: true,
    inline: true
  },
  devtool: 'source-map'
}
