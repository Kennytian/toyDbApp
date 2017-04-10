import { AsyncStorage } from 'react-native';

import { Iterable, Map } from 'immutable';

import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate, purgeStoredState } from 'redux-persist-immutable';
import promise from 'redux-promise';

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

export let store = null;

const enhancers = compose(...[
  applyMiddleware(...reduxMiddleware),
  autoRehydrate()
]);


function setPersistStore() {
  persistStore(store, {
    debounce: 200,
    storage: AsyncStorage,
    keyPrefix: 'reduxPersist',
    blacklist: ['auth', 'userState']
  });
}

export function clearPersistedByKeys(keys) {
  purgeStoredState({
    storage: AsyncStorage
  }, keys).then(() => {
    __DEV__ && console.log('purge completed');
  });
}

export default function configureStore(initialState = Map()) {
  store = createStore(rootReducer, initialState, enhancers);

  // hotReloading();

  setPersistStore();

  return store;
}