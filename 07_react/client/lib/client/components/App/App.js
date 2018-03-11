'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _user = require('../../store/user');

require('isomorphic-fetch');

var _Navigation = require('../Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _HomeContainer = require('../../routes/Home/containers/HomeContainer');

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _FeedContainer = require('../../routes/Feed/containers/FeedContainer');

var _FeedContainer2 = _interopRequireDefault(_FeedContainer);

var _RegistrationContainer = require('../../routes/Registration/containers/RegistrationContainer');

var _RegistrationContainer2 = _interopRequireDefault(_RegistrationContainer);

var _AuthenticationContainer = require('../../routes/Authentication/containers/AuthenticationContainer');

var _AuthenticationContainer2 = _interopRequireDefault(_AuthenticationContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var name = _ref.name;

  var NavigationWithUser = (0, _reactRedux.connect)(function (state) {
    return { user: state.user.user };
  }, function (dispatch) {
    return (0, _redux.bindActionCreators)({ logOut: _user.logOut }, dispatch);
  })(_Navigation2.default);

  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(
      'div',
      { className: 'page' },
      _react2.default.createElement(NavigationWithUser, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomeContainer2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/feed', component: _FeedContainer2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _RegistrationContainer2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _AuthenticationContainer2.default }),
        _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
      )
    )
  );
};
// import './styles/core.scss';


App.propTypes = {
  name: _propTypes2.default.string
};

exports.default = App;