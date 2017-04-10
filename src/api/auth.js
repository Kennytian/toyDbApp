import * as types from './../constants/actionTypes';

function login(data) {
  return {
    type: types.LOGIN,
    data
  };
}

export function loginRequest({userName, password, validateCode}) {
  return async function (dispatch) {
    try {
      dispatch(login({
        isFetching: true
      }));

      let result = {userName: 'Emma', age: 20};
      return dispatch(login({
        ...result,
        isFetching: false
      }));
    } catch (e) {
      dispatch(login({
        isFetching: false
      }));
      __DEV__ && console.warn('action login:', e);
    }
  };
}