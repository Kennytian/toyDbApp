import { Dimensions, PixelRatio, Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const PIXEL_RATIO = PixelRatio.get();

export {
  IS_ANDROID,
  IS_IOS,

  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  PIXEL_RATIO
};
