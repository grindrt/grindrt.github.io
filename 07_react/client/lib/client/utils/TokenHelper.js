'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _CookieHelper = require('./CookieHelper');

var _CookieHelper2 = _interopRequireDefault(_CookieHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TokenHelper() {}

TokenHelper.decodeJwtToken = function (token) {
  var payload = (0, _jwtDecode2.default)(token);

  if (typeof window !== 'undefined') {
    _CookieHelper2.default.createCookie('JwtToken', token);
  }

  return {
    id: payload.sub,
    name: payload.name
  };
};

exports.default = TokenHelper;