/* @flow */

import React  from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const tabBar = (props) => {
  if (!props || !props.leftText || !props.rightText) {
    throw new Error('leftText or rightText is not special');
  }

  let selectedIndex = props.selectedIndex || 0;

  return (
    <View style={styles.tabBar.container}>
      <View style={styles.tabBar.innerWrapper}>
        <Text style={[styles.tabBar.button, selectedIndex === 0 && styles.tabBar.selected]} onPress={props.leftPress}>{props.leftText}</Text>
        <View style={styles.tabBar.splitLine}/>
        <Text style={[styles.tabBar.button, selectedIndex === 1 && styles.tabBar.selected]} onPress={props.rightPress}>{props.rightText}</Text>
      </View>
    </View>
  );
};

export default tabBar;