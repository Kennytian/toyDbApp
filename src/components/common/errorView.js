import React  from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import imageSource from '../../constants/imageSource';
import { ACTIVE_OPACITY } from '../../constants/toyDb';

const errorView = (props) => {
  if (!props) {
    return null;
  }

  let _text = props.errText || '小编正在努力中…';
  let _btnOnPress = props.btnOnPress || null;
  let _btnText = props.btnText || '回到首页';

  let elementButton = _btnOnPress ?
    <TouchableOpacity style={styles.errorView.button} onPress={_btnOnPress} activeOpacity={ACTIVE_OPACITY}>
      <Text style={styles.errorView.text}>{_btnText}</Text>
    </TouchableOpacity> : null;

  return (
    <View style={styles.container}>
      <Image style={styles.errorView.icon} resizeMode={Image.resizeMode.center} source={imageSource.components.errorIcon}/>
      <View style={styles.errorView.msgWrapper}>
        <Text style={styles.errorView.text}>{_text}</Text>
      </View>
      {elementButton}
    </View>
  );
};

export default errorView;