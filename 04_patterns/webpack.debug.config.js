var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractJSON = new ExtractTextPlugin("result.json");
var extractCSS = new ExtractTextPlugin("bundle.css");

module.exports = {
    entry: {
        main: [
          "./src/home/home",
          "./src/styles/buttons.less",
          "./src/styles/feed.less",
          "./src/styles/footer.less",
          "./src/styles/site.less",
          , "./json/test.json"
        ]
    },
    output: {
        path: path.join( __dirname, "/dist"),
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
                loader: extractCSS.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap")
            }],
        preLoaders: [
            {
                test: /\.json$/,
                loader:  extractJSON.extract("custom-loader")
            }]
    },
    plugins: [
        extractJSON,
        extractCSS,
        new webpack.DefinePlugin({
            DEBUG: JSON.stringify(true),
            NEWSAPI_KEY: "cbcde34889f4417b9dce339f88f24de8"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolveLoader: {
        alias: {
            "custom-loader": path.join(__dirname, "./src/loaders/custom-loader.js")
        }
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        inline: true
    }
};
