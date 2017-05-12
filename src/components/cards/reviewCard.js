/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import ImageSource from '../../constants/imageSource';

import styles from './review.style';

class ReviewCard extends Component {
  static defaultProps = {
    reviewerName: '老田'
  };

  static propTypes = {
    onLikePress: PropTypes.func,
    onReplyPress: PropTypes.func,
    reviewerName: PropTypes.string,
    reviewContent: PropTypes.string,
    replyContent: PropTypes.string,
    replyDate: PropTypes.string,
    likeCount: PropTypes.number
  };

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text style={styles.textRow1}>{this.props.reviewerName}回复了你的评论</Text>
        <View style={styles.splitLine}/>
        <Text style={styles.textRow2}>评论内容：{this.props.reviewContent}</Text>
        <View style={styles.reply}>
          <Text style={styles.textRow3}>{this.props.replyContent}</Text>
        </View>
        <View style={styles.splitLine}/>
        <View style={styles.bottomRow.container}>
          <Text style={styles.bottomRow.date}>{this.props.replyDate}</Text>
          <TouchableOpacity style={styles.bottomRow.like.wrapper} disabled={!this.props.onLikePress} onPress={this.props.onLikePress}>
            <Image style={styles.bottomRow.like.icon} source={ImageSource.home.praise}/>
            <Text style={styles.bottomRow.like.count}>{this.props.likeCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity hitSlop={styles.hitSlop} style={styles.bottomRow.reply.wrapper} disabled={!this.props.onReplyPress} onPress={this.props.onReplyPress}>
            <Text style={styles.bottomRow.reply.text}>回复</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ReviewCard;