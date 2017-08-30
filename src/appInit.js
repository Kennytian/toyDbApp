import { Alert, AsyncStorage, BackAndroid, NetInfo } from 'react-native';
import { toastLong } from './utils/toast';

import ErrorUtils from 'ErrorUtils';

export default class AppInit {
  appWillMount() {

  }

  appDidMount() {

  }

  appWillUnmount() {

  }

  _catchError() {
    ErrorUtils.setGlobalHandler((err) => {
      __DEV__ && console.warn('JS出现严重错误:', JSON.stringify(err));
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