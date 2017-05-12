import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import styles from '../../../components/cards/review.style';
import pageStyles from './style';
import data from '../../../data/review';
import imageSource from '../../../constants/imageSource';

class Item extends Component {
  render() {
    let {item} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textRow1}>{item.reviewerName}回复了你的评论</Text>
        <View style={styles.splitLine}/>
        <Text style={styles.textRow2}>评论内容：{item.reviewContent}</Text>
        <View style={styles.reply}>
          <Text style={styles.textRow3}>回复内容：{item.replyContent}</Text>
        </View>
        <View style={styles.splitLine}/>
        <View style={styles.bottomRow.container}>
          <Text style={styles.bottomRow.date}>{item.replyDate}</Text>
          <TouchableOpacity style={styles.bottomRow.like.wrapper} disabled={!item.onLikePress} onPress={item.onLikePress}>
            <Image style={styles.bottomRow.like.icon} source={imageSource.components.zan}/>
            <Text style={styles.bottomRow.like.count}>{item.likeCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity hitSlop={styles.hitSlop} style={styles.bottomRow.reply.wrapper} disabled={!item.onReplyPress} onPress={item.onReplyPress}>
            <Text style={styles.bottomRow.reply.text}>回复</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class PageComponent extends Component {
  static navigationOptions = {
    title: '我的消息'
  };

  render() {
    return (
      <View style={pageStyles.container}>
        {this._renderList()}
      </View>
    );
  }

  _renderList() {
    return (
      <FlatList data={data} renderItem={this.renderItem} refreshing={false} onRefresh={this._onRefresh}/>
    );
  }

  _onRefresh() {

  }

  renderItem(json) {
    return <Item item={json.item}/>;
  }
}
export default PageComponent;