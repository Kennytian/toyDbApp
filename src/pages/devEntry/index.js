import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

import ImageCard from '../../components/cards/imageCard';
import SearchBar from '../../components/common/searchBar';
import ScanButton from '../../components/common/scanButton';
import imageSource from '../../constants/imageSource';

export default class DevEntry extends Component {
  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.welcome, {margin: 0, padding: 0}]} onPress={() => this._navTo('OhError')}>
          进入 OnError 页面
        </Text>
        <View style={{flexDirection: 'row'}}>
          <SearchBar placeholderText="请输入关键字" onChangeText={() => {
          }}/>
          <ScanButton onPress={() => {
          }}/>
        </View>

      </View>
    );
  }
}

