import { setRecords, filterRecords, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_RECORDS':
            return setRecords(state, action.records);
        case 'FILTER_RECORDS':
            return filterRecords(state, action.records, action.author);
    }

    return state;
}