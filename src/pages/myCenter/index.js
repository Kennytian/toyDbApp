import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
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
        <ImageCard source={imageSource.temp_image_card} text={'我的世界游戏周边'} titlePosition={'left'} onPress={() => {
        }}/>

      </View>
    );
  }
}

