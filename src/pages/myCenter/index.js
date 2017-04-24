import React, { Component } from 'react';
import {
  Text,
  View, TouchableOpacity
} from 'react-native';

import styles from './../styles';

import ImageCard from '../../components/cards/imageCard';
import imageSource from '../../constants/imageSource';

export default class MyCenter extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={[styles.container]}>
        <Text style={[styles.welcome, {margin: 0, padding: 0}]}>
          Welcome to MyCenter!
        </Text>
        <TouchableOpacity onPress={() => navigate('DevEntry')}>
          <Text style={styles.welcome}>
            开发入口
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

