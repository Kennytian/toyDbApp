import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';

import styles from '../styles';

import ImageCard from '../../components/cards/imageCard';
import SearchBar from '../../components/common/searchBar';
import ScanButton from '../../components/common/scanButton';
import TabBar from '../../components/common/tabBar';
import imageSource from '../../constants/imageSource';

const innerStyles = {
  span: {
    marginTop: 5, padding: 0
  }
};

export default class DevEntry extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '开发入口'
  });

  state = {
    tabSelectedIndex: 0
  };

  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <View style={[innerStyles.span, {flexDirection: 'row'}]}>
            <SearchBar placeholderText="请输入关键字" onChangeText={() => {
            }}/>
            <ScanButton onPress={() => {
            }}/>
          </View>
          <Text style={[styles.welcome, innerStyles.span]} onPress={() => this._navTo('OhError')}>
            进入 OnError 页面
          </Text>
          <Text style={[styles.welcome, innerStyles.span]} onPress={() => this._navTo('ReviewList')}>
            进入 我的消息 页面
          </Text>
          <Text style={[styles.welcome, innerStyles.span]} onPress={() => this._navTo('paymentChooser')}>
            进入 paymentChooser 页面
          </Text>
          <View style={[innerStyles.span]}>
            <TabBar leftText="评论" selectedIndex={this.state.tabSelectedIndex} leftPress={() => {
              this.setState({tabSelectedIndex: 0});
            }} rightText="点赞" rightPress={() => {
              this.setState({tabSelectedIndex: 1});
            }}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

