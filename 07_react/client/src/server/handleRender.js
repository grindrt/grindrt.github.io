const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { Provider } = require('react-redux');
const pug = require('pug');
const cookieParser = require('cookie-parser');

const rootSaga = require('../client/store/rootSaga').default;
const createStore = require('../client/store/createStore').default;
const App = require('../client/App.js').default;
const decodeJwtToken = require('../client/utils/').decodeJwtToken;

const renderFullPage = (html, preloadedState) => {
    return pug.renderFile(path.resolve(__dirname, 'views/index.pug'), { html, preloadedState })
};

const handleRender = (req, res) => {
    let cookies = cookieParser.JSONCookies(req.cookies);
    const initialState = {};
    if (cookies.JwtToken) {
        initialState.user = {
            loading: false,
            user: decodeJwtToken(cookies.JwtToken)
        }
    }
    const store = createStore(initialState);

    const context = {};
    const app = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    store.runSaga(rootSaga).done.then(() => {
        const html = renderToString(app);

        if (context.url) {
            return res.redirect(context.url);
        }

        const preloadedState = store.getState();

        return res.send(renderFullPage(html, preloadedState));
    });

    renderToString(app);

    store.close();
}

module.exports = handleRender;
