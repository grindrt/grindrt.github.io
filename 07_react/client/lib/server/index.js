'use strict';

var path = require('path');
var express = require('express');
var handleRender = require('./handleRender.js');
var webpack = require('webpack');
var cookieParser = require('cookie-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackClientConfig = require('../../config/webpack.prod');
var compression = require('compression');

var port = 7777;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser());

Object.assign(webpackClientConfig.output, { path: '/' });
// app.use(webpackDevMiddleware(webpack(webpackClientConfig), {}));

app.use(express.static('public'));
app.get('*', handleRender);

app.listen(port, function () {
  console.info('Express listening on port ' + port);
});