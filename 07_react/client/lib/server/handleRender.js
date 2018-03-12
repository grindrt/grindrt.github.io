'use strict';

var path = require('path');
var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var _require2 = require('react-router-dom'),
    StaticRouter = _require2.StaticRouter;

var _require3 = require('react-redux'),
    Provider = _require3.Provider;

var pug = require('pug');
var cookieParser = require('cookie-parser');

var rootSaga = require('../client/store/rootSaga').default;
var createStore = require('../client/store/createStore').default;
var App = require('../client/components/App/App').default;
var decodeJwtToken = require('../client/utils/TokenHelper').decodeJwtToken;

var renderFullPage = function renderFullPage(html, preloadedState) {
    return pug.renderFile(path.resolve(__dirname, 'views/index.pug'), { html: html, preloadedState: preloadedState });
};

var handleRender = function handleRender(req, res) {
    var cookies = cookieParser.JSONCookies(req.cookies);
    var initialState = {};
    if (cookies.JwtToken) {
        initialState.user = {
            loading: false,
            user: decodeJwtToken(cookies.JwtToken)
        };
    }
    var store = createStore(initialState);

    var context = {};
    var app = React.createElement(
        Provider,
        { store: store },
        React.createElement(
            StaticRouter,
            { location: req.url, context: context },
            React.createElement(App, null)
        )
    );

    store.runSaga(rootSaga).done.then(function () {
        var html = renderToString(app);

        if (context.url) {
            return res.redirect(context.url);
        }

        var preloadedState = store.getState();

        return res.send(renderFullPage(html, preloadedState));
    });

    renderToString(app);

    store.close();
};

module.exports = handleRender;