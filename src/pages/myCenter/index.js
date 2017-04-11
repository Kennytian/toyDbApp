import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './../styles';

import ImageCard from '../../components/cards/imageCard';
import imageSource from '../../constants/imageSource';

export default class MyCenter extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.welcome,{margin: 0,padding: 0}]}>
          Welcome to MyCenter!
        </Text>
        <ImageCard source={imageSource.temp_image_card} text={'我的世界游戏周边'} titlePosition={'left'} onPress={()=>{}}/>
      </View>
    );
  }
}

