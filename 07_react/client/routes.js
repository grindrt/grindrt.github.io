import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Home from './views/home';
import App from './views/app';

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
    </Route>
  </Router>
);
