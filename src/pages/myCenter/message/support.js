import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import styles from '../../../components/cards/review.style';
import pageStyles from './style';
import data from '../../../data/review';

class Item extends Component {
  render() {
    let {item} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textRow1}>{item.reviewerName}点赞了你的评论</Text>
        <View style={styles.splitLine}/>
        <Text style={styles.textRow2}>评论内容：{item.reviewContent}</Text>
        <View style={styles.splitLine}/>
        <View style={styles.bottomRow.container}>
          <Text style={styles.bottomRow.date}>2017-3-3</Text>
        </View>
      </View>
    );
  }
}

class PageComponent extends Component {
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