'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signInUserAjax = exports.registerUserAjax = exports.removePostAjax = exports.createPostAjax = exports.fetchPostsAjax = undefined;

var _CookieHelper = require('../utils/CookieHelper');

var _CookieHelper2 = _interopRequireDefault(_CookieHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlConfig = require('../../../config/url.json');
var fetchPostsAjax = exports.fetchPostsAjax = function fetchPostsAjax() {
    return fetch(urlConfig.API_HOST + '/blogs').then(function (res) {
        return res.json();
    });
};

var createPostAjax = exports.createPostAjax = function createPostAjax(post) {
    return fetch(urlConfig.API_HOST + '/blogs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + _CookieHelper2.default.readCookie('JwtToken')
        },
        body: JSON.stringify(post)
    }).then(function (res) {
        return res.json();
    });
};

var removePostAjax = exports.removePostAjax = function removePostAjax(postId) {
    return fetch(urlConfig.API_HOST + '/blogs/' + postId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + _CookieHelper2.default.readCookie('JwtToken')
        }
    }).then(function (res) {
        return res.json();
    });
};

var registerUserAjax = exports.registerUserAjax = function registerUserAjax(user) {
    return fetch(urlConfig.API_HOST + '/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(function (res) {
        return res.json();
    });
};

var signInUserAjax = exports.signInUserAjax = function signInUserAjax(user) {
    return fetch(urlConfig.API_HOST + '/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(function (res) {
        return res.json();
    });
};