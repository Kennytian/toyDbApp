/* @flow */

import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import TabBar from '../../components/common/tabBar';

import ReviewListItem  from '../../containers/reviewListItem';

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

  _renderList() {
    let data = [
      {key: 'a', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'b', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'c', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'd', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'e', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'f', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'g', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'h', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'i', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234},
      {key: 'j', reviewerName: '周边', reviewContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做再吃，可以杀虫卵', replyContent: '所以一些可以生食的瓜果蔬菜更容易被污染，所以食物还是尽量做熟了吃', replyDate: '2017-3-5', likeCount: 1234}
    ];

    if (this.props.isFetching) {
      return <LoadingView />;
    }

    if (this.props.errorMessage) {
      return <ErrorView text={this.props.errorMessage}/>;
    }

    return (
      <FlatList contentContainerStyle={{alignItems: 'center'}} data={data} renderItem={ReviewListItem} refreshing={false} onRefresh={this._onRefresh}/>
    );
  }

  _onRefresh = () => {
    console.debug('onRefresh', new Date());
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

        <View style={{marginTop: 8, marginLeft: 8, marginRight: 8}}>
          {this._renderList()}
        </View>
      </View>
    );
  }
}

