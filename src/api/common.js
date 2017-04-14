import Config from './../config/app';

import Fetcher from './../utils/fetcher';

import { ICommon } from './nodeHub';

const _getRsaKey = async () => {
  let response = await Fetcher.get(Config.API_DOMAIN, ICommon.getStars);
  __DEV__ && console.debug('bindCardAndIdentify response', response);
  return response;
};

const _getStars = async (keyword, sort) => {
  //  REQUEST_URL = 'https://api.github.com/search/repositories?q=elong&sort=stars';
  let queryParam = `?q=${keyword}&sort=${sort}`;
  let response = await Fetcher.get(Config.API_DOMAIN, ICommon.getStars, queryParam);
  __DEV__ && console.debug('getStars response', response);
  return response;
};


const Common = {
  getRsaKey: _getRsaKey,

  getStars: async (keyword, sort) => _getStars(keyword, sort)
};

export default Common;
