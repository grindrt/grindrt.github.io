import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('has an initial state', ()=>{
        const action = { type: 'SET_RECORDS', records: [{ Author: 'Test1', Message: 'Message1' }] };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            records: [{ Author: 'Test1', Message: 'Message1' }]
        }));
    })

    it('handle SET_RECORDS', () => {
        const initialState = Map();
        const action = { type: 'SET_RECORDS', records: [{ Author: 'Test1', Message: 'Message1' }] };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            records: [{ Author: 'Test1', Message: 'Message1' }]
        }));
    });

    it('handle FILTER_RECORDS', () => {
        const initialState = Map();
        const author = 'Test1';
        const records = [{ Author: 'Test1', Message: 'Message1' }, { Author: 'Test2', Message: 'Message2' }];
        const action = { type: 'FILTER_RECORDS', records: records, author: author };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            records: [{ Author: 'Test1', Message: 'Message1' }]
        }));
    });

});