import React  from 'react';
import { Image, TouchableOpacity } from 'react-native';

import imageSource from '../../constants/imageSource';
import { ACTIVE_OPACITY } from '../../constants/toyDb';

import styles from './styles';

const scanButton = (props) => {
  if (!props) {
    return null;
  }

  let _onPress = props.onPress || null;

  return (
    <TouchableOpacity style={[styles.scanButton.container, props.style]} disabled={!_onPress} hitSlop={styles.hitSlop} onPress={_onPress} activeOpacity={ACTIVE_OPACITY}>
      <Image source={imageSource.home.scan}/>
    </TouchableOpacity>
  );
};

export default scanButton;

