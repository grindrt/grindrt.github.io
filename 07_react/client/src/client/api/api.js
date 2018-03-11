const urlConfig = require('../../../config/url.json');
import CookieHelper from '../utils/CookieHelper';

export const fetchPostsAjax = () => {
    return fetch(`${urlConfig.API_HOST}/blogs`)
        .then(res => res.json());
};

export const createPostAjax = post => {
    return fetch(`${urlConfig.API_HOST}/blogs`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CookieHelper.readCookie('JwtToken')}`
        },
        body: JSON.stringify(post)
    }).then(res => res.json());
};

export const removePostAjax = postId => {
    return fetch(`${urlConfig.API_HOST}/blogs/${postId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CookieHelper.readCookie('JwtToken')}`
        }
    }).then(res => res.json());
};

export const registerUserAjax = user => {
    return fetch(`${urlConfig.API_HOST}/user/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json());
};

export const signInUserAjax = user => {
    return fetch(`${urlConfig.API_HOST}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json());
};
