const path = require('path');
const express = require('express');
const handleRender = require('./handleRender.js');
const webpack = require('webpack');
const cookieParser = require('cookie-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackClientConfig = require('../../config/webpack.prod');
const compression = require('compression');

const port = 7777;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser());

Object.assign(webpackClientConfig.output, { path: '/' });
app.use(webpackDevMiddleware(webpack(webpackClientConfig), {}));

app.use(express.static('public'));
app.get('*', handleRender);

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
