import { AsyncStorage } from 'react-native';
import { fromJS } from 'immutable';

import * as types from './../constants/actionTypes';

const initialState = fromJS({
  data: {}
});

export function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      if (action.data && action.data.data) {
        AsyncStorage.mergeItem('userInfo', JSON.stringify(action.data.data));
      }
      return state.merge(action.data);
    case types.LOGOUT:
      AsyncStorage.removeItem('userInfo');
      return initialState;
    default:
      return state;
  }
}