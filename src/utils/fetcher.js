import { AsyncStorage } from 'react-native';

import { toastShort } from './toast';

function _interceptor(body) {
  if (body && body.code === 'P100') {
    AsyncStorage.removeItem('userInfo');
    // TODO navigate to login
  }
}

export const makeParams = (method, body) => {
  let params = {
    method, headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  if (body) {
    params.body = body;
  }

  return params;
};

const attemptFetch = async (domain, route, params, queryParam = '') => {
  try {
    let url = `${domain}/${route}${queryParam}`;

    let response = await fetch(url, params);
    let body = await response.json();
    _interceptor(body);

    return body;
  } catch (error) {
    if (__DEV__) {
      console.warn('fetching error: ', error);
    } else {
      toastShort('Wow，好像没网了');
    }
    return null;
  }
};

const fetchPost = (domain, route, parameters) => {
  const params = makeParams('POST', parameters);
  return attemptFetch(domain, route, params);
};

const fetchGet = (domain, route, parameters = '') => {
  const params = makeParams('GET');
  return attemptFetch(domain, route, params, parameters);
};

const fetchPut = (domain, route, parameters) => {
  const params = makeParams('PUT', parameters);
  return attemptFetch(domain, route, params);
};

const fetchDelete = (domain, route, parameters) => {
  const params = makeParams('DELETE', parameters);
  return attemptFetch(domain, route, params);
};

const Fetcher = {
  get: fetchGet,
  post: fetchPost,
  put: fetchPut,
  delete: fetchDelete
};

export default Fetcher;