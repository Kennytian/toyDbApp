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
      action.type === 'Navigation/NAVIGATE'
    ),
    diff: false,
    duration: true,
    stateTransformer(state) {
      // rootReducer 用了 combineReducers redux-immutable
      // if (Iterable.isIterable(state)) {
      //   return state.toJS();
      // }
      // return state.toJS();

      // rootReducer 用了 combineReducers redux
      let newState = {};
      for (let i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }
      return newState;
    }
  });

  reduxMiddleware.push(promise);
  reduxMiddleware.push(reduxLogger);
}

const enhancers = compose(...[
  applyMiddleware(...reduxMiddleware),
  autoRehydrate()
]);

// const store = createStore(rootReducer, Map(), enhancers);
const store = createStore(rootReducer, {}, enhancers);

export default store;

