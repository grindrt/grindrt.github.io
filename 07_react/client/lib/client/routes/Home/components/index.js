'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

({
  "home__welcome": "_2gY",
  "homeWelcome": "_2gY",
  "home__join-us": "FjT",
  "homeJoinUs": "FjT"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    'div',
    { className: 'home' },
    props.user ? _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h2',
        { className: 'home__welcome' },
        'Hi, ',
        props.user.name,
        '!'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'home__join-us', to: '/feed' },
        'Feed'
      )
    ) : _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'h2',
        { className: 'home__welcome' },
        'Hi, there!'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'home__join-us', to: '/signup' },
        'Register'
      )
    )
  );
};

exports.default = Home;