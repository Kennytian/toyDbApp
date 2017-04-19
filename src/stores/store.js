import { Iterable, Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';

import promise from 'redux-promise';

import { persistStore, autoRehydrate, purgeStoredState } from 'redux-persist-immutable';

import reduxThunk from 'redux-thunk';

import rootReducer from './../reducers/rootReducer';

const reduxMiddleware = [reduxThunk];

if (__DEV__) {
  const createLogger = require('redux-logger').createLogger;
  const reduxLogger = createLogger({
    collapsed: (getState, action) => (
      action.type === 'REACT_NATIVE_ROUTER_FLUX_BACK_ACTION' ||
      action.type === 'REACT_NATIVE_ROUTER_FLUX_FOCUS' ||
      action.type === 'REACT_NATIVE_ROUTER_FLUX_JUMP' ||
      action.type === 'REACT_NATIVE_ROUTER_FLUX_PUSH' ||
      action.type === 'REACT_NATIVE_ROUTER_FLUX_REFRESH' ||
      action.type === 'REACT_NATIVE_ROUTER_FLUX_RESET'
    ),
    diff: false,
    duration: true,
    stateTransformer(state) {
      if (Iterable.isIterable(state)) {
        return state.toJS();
      }
      return state;
    }
  });

  reduxMiddleware.push(promise);
  reduxMiddleware.push(reduxLogger);
}

const enhancers = compose(...[
  applyMiddleware(...reduxMiddleware),
  autoRehydrate()
]);

const store = createStore(rootReducer, {}, enhancers);

export default store;

