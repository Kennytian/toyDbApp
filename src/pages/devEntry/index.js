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
import imageSource from '../../constants/imageSource';
import ErrorView from '../../components/common/errorView';

export default class DevEntry extends Component {
  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.welcome, {margin: 0, padding: 0}]} onPress={() => this._navTo('OnError')}>
          进入 OnError 页面
        </Text>
        <ErrorView/>
      </View>
    );
  }
}

