/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import ImageSource from '../../constants/imageSource';

import styles from './styles';

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
      <View style={[styles.reviewCard.container, this.props.containerStyle]}>
        <Text style={styles.reviewCard.textRow1}>{this.props.reviewerName}回复了你的评论</Text>
        <View style={styles.reviewCard.splitLine}/>
        <Text style={styles.reviewCard.textRow2}>评论内容：{this.props.reviewContent}</Text>
        <View style={styles.reviewCard.reply}>
          <Text style={styles.reviewCard.textRow3}>{this.props.replyContent}</Text>
        </View>
        <View style={styles.reviewCard.splitLine}/>
        <View style={styles.reviewCard.bottomRow.container}>
          <Text style={styles.reviewCard.bottomRow.date}>{this.props.replyDate}</Text>
          <TouchableOpacity style={styles.reviewCard.bottomRow.like.wrapper} disabled={!this.props.onLikePress} onPress={this.props.onLikePress}>
            <Image style={styles.reviewCard.bottomRow.like.icon} source={ImageSource.home.praise}/>
            <Text style={styles.reviewCard.bottomRow.like.count}>{this.props.likeCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity hitSlop={styles.hitSlop} style={styles.reviewCard.bottomRow.reply.wrapper} disabled={!this.props.onReplyPress} onPress={this.props.onReplyPress}>
            <Text style={styles.reviewCard.bottomRow.reply.text}>回复</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ReviewCard;