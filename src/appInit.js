import { Alert, AsyncStorage, BackAndroid, NetInfo } from 'react-native';
import { toastLong } from './utils/toast';

import ErrorUtils from 'ErrorUtils';

export default class AppInit {
  appWillMount() {

  }

  appDidMount() {
    this._offlineChecking();
  }

  appWillUnmount() {

  }

  _catchError() {
    ErrorUtils.setGlobalHandler((err) => {
      __DEV__ && console.warn('JS出现严重错误:', JSON.stringify(err));

      // TODO 后期记录到统计平台
    });
  }

  _offlineChecking() {
    NetInfo.isConnected.addEventListener('change', (connect) => {
      if (!connect) {
        toastLong('Wow~~ 好像断网了');
      }
    });
  }
}