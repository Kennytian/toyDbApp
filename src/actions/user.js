import Common from './../api/common';

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
        isFetching: true,
        errorMessage: ''
      }));
      let result = await Common.getStars();
      return dispatch(login({
        ...result,
        isFetching: false,
        errorMessage: ''
      }));
    } catch (e) {
      dispatch(login({
        isFetching: false,
        errorMessage: '网络请求错误' + e.toString()
      }));
      __DEV__ && console.warn('action login:', e);
    }
  };
}