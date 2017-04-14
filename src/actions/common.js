import Common from './../api/common';

import * as types from './../constants/actionTypes';

function star(data) {
  return {
    type: types.SEARCH,
    data
  };
}

export function starRequest({keyword, sort}) {
  return async function (dispatch) {
    try {
      dispatch(star({
        isFetching: true,
        errorMessage: ''
      }));
      let result = await Common.getStars(keyword, sort);
      return dispatch(star({
        ...result,
        isFetching: false,
        errorMessage: ''
      }));
    } catch (e) {
      dispatch(star({
        isFetching: false,
        errorMessage: '网络请求错误' + e.toString()
      }));
      __DEV__ && console.warn('action login:', e);
    }
  };
}