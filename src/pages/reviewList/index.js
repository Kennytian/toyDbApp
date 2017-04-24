import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TabBar from '../../components/common/tabBar';

import styles from '../styles';

export default class ReviewList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '消息列表'
  });

  state = {
    tabSelectedIndex: 0
  };

  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View >
        <TabBar leftText="评论" selectedIndex={this.state.tabSelectedIndex} leftPress={() => {
          this.setState({tabSelectedIndex: 0});
        }} rightText="点赞" rightPress={() => {
          this.setState({tabSelectedIndex: 1});
        }}/>
      </View>
    );
  }
}

