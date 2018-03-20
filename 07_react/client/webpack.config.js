const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'dev';

const clientConfig = {
    devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
    entry: {
    main: './src/client/index.js',
        vendor: [
            'react',
            'react-dom',
            'babel-polyfill',
            'isomorphic-fetch/fetch-npm-browserify',
        ],
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: isDev ? '[name].js' : '[name]-[chunkhash].js',
    },

    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
        ],
        extensions: [
            '.js',
            '.jsx',
        ],
    },

    module: {
        rules: [
        {
            test: /\.js?$|\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
            query:
            {
                presets:['react']
            }
        },

        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 2,
                        localIdentName: '[local]',
                    },
                },
                {
                    loader: 'postcss-loader',
                },
                {
                    loader: 'sass-loader',
                },
            ],
            }),
        },
        {
            test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file?name=[name].[ext]',
        },
        ],
    },

    plugins: [
        new CleanPlugin(['public']),
        new ExtractTextPlugin({
            filename: 'style.css',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new ManifestPlugin(),
        new DirectoryNamedWebpackPlugin()
    ],
};

const serverConfig = {
    entry: './src/server',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'server.js',
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
  
    target: 'node',
        node: {
            __dirname: true,
        },
  
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
        ],
            extensions: [
            '.js',
            '.jsx'
        ],
    },
  
    module: {
        rules: [
            {
                test: /\.js?$|\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                    presets:['react']
                }
            },    
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file?name=[name].[ext]',
                    exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'window': JSON.stringify(false),
        }),
        new DirectoryNamedWebpackPlugin()
    ],
};

module.exports = [clientConfig, serverConfig];
