import makeStore from './src/store';
import  startServer  from './src/server';

export const store = makeStore();
startServer(store);

store.dispatch({
    type: 'SET_RECORDS',
    records: require('./test_records.json')
});

store.dispatch({
    type: 'FILTER_RECORDS',
    records: require('./test_records.json'),
    author: 'Darth Vader'
});