import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const PIXEL_RATIO = PixelRatio.get();

const BORDER_WIDTH = StyleSheet.hairlineWidth;

export {
  IS_ANDROID,
  IS_IOS,

  BORDER_WIDTH,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  PIXEL_RATIO
};
