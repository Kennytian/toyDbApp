import React  from 'react';
import { TouchableOpacity } from 'react-native';

import imageSource from '../../constants/imageSource';
import { ACTIVE_OPACITY } from '../../constants/toyDb';
import Icon from './icon';

import styles from './styles';

const ScanButton = (props) => {
  if (!props) {
    return null;
  }

  let _onPress = props.onPress || null;

  return (
    <TouchableOpacity style={[styles.iconButton.container, props.style]} disabled={!_onPress} hitSlop={styles.hitSlop} onPress={_onPress}>
      <Icon source={imageSource.home.scan}/>
    </TouchableOpacity>
  );
};

const SettingsButton = (props) => {
  if (!props) {
    return null;
  }

  let _onPress = props.onPress || null;

  return (
    <TouchableOpacity style={[styles.iconButton.container, props.style]} disabled={!_onPress} hitSlop={styles.hitSlop} onPress={_onPress}>
      <Icon source={imageSource.myCenter.set}/>
    </TouchableOpacity>
  );
};

export { ScanButton, SettingsButton };

