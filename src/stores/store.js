import thunkMiddleWare from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './../reducers/rootReducer';

const middleWare = [thunkMiddleWare];
const store = createStore(
    reducers,
    {},
    applyMiddleware(...middleWare)
);
export default store;

