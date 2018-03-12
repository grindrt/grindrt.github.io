const { assert } = require('chai');
const { takeEvery, takeLatest } = require('redux-saga');
const { call, take, fork, cancel } = require('redux-saga/effects');
const { createMockTask } = require('redux-saga/utils');

import rootSaga from '../src/client/store/rootSaga';

it('should create root saga', ()=>{
    const generator = rootSaga();
    assert.deepEqual(
        generator.next().value,
        fork(takeLatest, 'user/REGISTER_REQUEST', watchRegisterUser),
        'fetch the register user'
    );

    assert.deepEqual(
        generator.next().value,
        fork(takeLatest, 'user/SIGNIN_REQUEST', watchSignInUser),
        'fetch the sign in'
    );

    assert.deepEqual(
        generator.next().value,
        fork(takeEvery, 'posts/FETCH_POSTS', watchFetchPosts),
        'fetch get posts'
    );

    assert.deepEqual(
        generator.next().value,
        fork(takeEvery, 'posts/CREATE_POST', watchCreatePost),
        'fetch create posts'
    );

    assert.deepEqual(
        generator.next().value,
        fork(takeEvery, 'posts/REMOVE_POST', watchRemovePost),
        'fetch remove posts'
    );
})