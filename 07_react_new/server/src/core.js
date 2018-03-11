import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setRecords(state, records) {
    const list = List(records);
    return state
        .set('records', list)
        .set('initialRecords', list);
}

export function filterRecords(state, records, author){
    let filtered = records.filter(x => x.Author === author);
    const list = List(filtered);
    return state
        .set('records', list)
        .set('initialRecords', list);
}