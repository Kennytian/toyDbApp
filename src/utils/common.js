import { Alert, Linking } from 'react-native';

export function callPhone(mobile, title) {
  Linking.canOpenURL(`tel://${mobile}`).then((supported) => {
    if (supported) {
      Alert.alert(
        title || '是否拨打电话',
        `${mobile}`, [{
          text: '取消',
          style: 'cancel'
        }, {
          text: '呼叫',
          onPress: () => Linking.openURL(`tel://${mobile}`)
        }]
      );
    }
  });
}

export const formatURL = (data) => {
  let str = '';
  for (let key in data) {
    let keyString = data[key];
    if (Array.isArray(data[key])) {
      keyString = '[' + data[key].toString() + ']';
    }
    str += key + '=' + keyString + '&';
  }
  return str.substr(0, str.length - 1);
};

export const hiddenPhone = (data) => {
  let str = '';
  if (data && data.length === 11) {
    str = `${data.slice(0, 3)}****${data.slice(7, 13)}`;
  }
  return str;
};

export const hiddenIdCard = (data) => {
  let str = '';
  if (data && data.length > 14) {
    str = `${data.slice(0, 1)}**********${data.slice(data.length - 1, data.length)}`;
  }
  return str;
};

export const isPhoneNumber = (data) => {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(data);
};

// 6-20位数字，符号，字母任意两种组合的密码
export const isValidPassword = (data) => {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)([^(0-9a-zA-Z)]|[()]|[a-zA-Z]|[0-9]){6,20}$/.test(data);
};

export const isIdCard = (data) => {
  return /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(data);
};

export const isBankCard = (data) => {
  return /^(\d{16}|\d{19})$/.test(data);
};