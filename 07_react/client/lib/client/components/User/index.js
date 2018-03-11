'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

({
  "user__name": "ls5",
  "userName": "ls5",
  "user__log-out": "_1HK",
  "userLogOut": "_1HK"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function User(props) {
  return _react2.default.createElement(
    'div',
    { className: 'user' },
    _react2.default.createElement(
      'div',
      { className: 'user__name' },
      props.name
    ),
    _react2.default.createElement(
      'div',
      { className: 'user__log-out', onClick: props.logOut },
      'Log out'
    )
  );
};

exports.default = User;