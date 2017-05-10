import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/header';
import Tab from './components/tab';

class Exponent extends Component {
  static navigationOptions = {
    title: '乐高积木玩具'
  };

  render() {
    return (
      <View>
        <Header/>
        <Tab active="recommend" navigation={this.props.navigation}/>
        <Text>相关推荐</Text>
      </View>
    );
  }
}

export default Exponent;