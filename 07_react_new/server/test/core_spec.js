import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setRecords, filterRecords } from '../src/core';

describe('application logic', () => {

    describe('setRecords', () => {

        it('add records to state', () => {
            const state = Map();
            const records = List.of(
                { Author: 'Test1', Message: 'Message1' },
                { Author: 'Test2', Message: 'Message2' }
            );
            const nextState = setRecords(state, records);
            const expected = Map({
                records: List.of(
                    { Author: 'Test1', Message: 'Message1' },
                    { Author: 'Test2', Message: 'Message2' }),
                initialRecords: List.of(
                    { Author: 'Test1', Message: 'Message1' },
                    { Author: 'Test2', Message: 'Message2' })
            });
            expect(nextState).to.deep.equal(expected);
        });

        it('converts to immutable', () => {
            const state = Map();
            const records = [
                { Author: 'Test1', Message: 'Message1' },
                { Author: 'Test2', Message: 'Message2' }
            ];
            const nextState = setRecords(state, records);
            const expected = Map({
                records: List.of(
                    { Author: 'Test1', Message: 'Message1' },
                    { Author: 'Test2', Message: 'Message2' }),
                initialRecords: List.of(
                    { Author: 'Test1', Message: 'Message1' },
                    { Author: 'Test2', Message: 'Message2' })
            });
            expect(nextState).to.deep.equal(expected);
        });

    });

    describe('filter', () => {

        it('set filtered by author records to state', () => {
            const state = Map();
            const author = 'Test1';
            const records = List.of(
                { Author: author, Message: 'Message1' },
                { Author: 'Test2', Message: 'Message2' }
            );
            const nextState = filterRecords(state, records, author);
            const expected = Map({
                records: List.of({ Author: 'Test1', Message: 'Message1' }),
                initialRecords: List.of({ Author: 'Test1', Message: 'Message1' })
            });

            expect(nextState).to.deep.equal(expected)
        })
    })

});