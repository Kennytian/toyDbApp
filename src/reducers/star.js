import { fromJS } from 'immutable';

import * as types from './../constants/actionTypes';

const initialState = fromJS({
  data: {}
});

export function star(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH:
      return state.merge(action);
    default:
      return state;
  }
}