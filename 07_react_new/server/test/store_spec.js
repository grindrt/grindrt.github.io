import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../src/store';

describe('store', () => {

    it('store configured using right', () => {
        const store = makeStore();
        expect(store.getStore()).to.equal(Map());

        store.dispatch({
            type: 'SET_RECORDS',
            records: [{ Author: 'Test1', Message: 'Message1' }]
        });
        expect(store.getState()).to.equal(fromJS({
            records: [{ Author: 'Test1', Message: 'Message1' }]
        }));
    })

});