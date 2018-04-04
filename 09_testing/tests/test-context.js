require('babel-polyfill');
// require('phantomjs-polyfill');

var testContext = require.context(".", true, /\.spec\.js$/);
testContext.keys().forEach(testContext);