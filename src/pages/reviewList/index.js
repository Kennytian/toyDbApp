/* @flow */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import TabBar from '../../components/common/tabBar';
import ReviewCard from '../../components/cards/reviewCard';

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
      <View>
        <View style={{backgroundColor: '#FFF'}}>
          <TabBar leftText="评论" selectedIndex={this.state.tabSelectedIndex} leftPress={() => {
            this.setState({tabSelectedIndex: 0});
          }} rightText="点赞" rightPress={() => {
            this.setState({tabSelectedIndex: 1});
          }}/>
        </View>

        <View style={{marginTop: 8,marginLeft: 8,marginRight: 8,backgroundColor: '#FFF'}}>
          <ReviewCard reviewerName="老五" reviewContent="所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵" replyContent="所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃" replyDate="2017-3-5" likeCount={300} />
        </View>
      </View>
    );
  }
}

