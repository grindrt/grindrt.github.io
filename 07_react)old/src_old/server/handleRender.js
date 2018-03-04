import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import pug from 'pug';

import rootSaga from '../client/store/rootSaga';
import createStore from '../client/store/createStore';
import App from '../client/App';

const renderFullPage = (html, preloadedState) => (
  pug.renderFile(path.resolve(__dirname, 'views/index.pug'), {html, preloadedState })
);

const handleRender = (req, res) => {
  const store = createStore();

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

export default handleRender;
