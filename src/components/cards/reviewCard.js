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
      <View style={[styles.container, styles.reviewOnly.container]}>
        <View style={styles.avatar.box}>
          <Image source={require('../../data/file/1.png')} style={styles.avatar.image}/>
        </View>
        <View style={styles.avatarRight}>
          <View style={styles.reviewOnly.info}>
            <Text style={styles.textRow1}>{this.props.reviewerName}</Text>
            <Text style={styles.bottomRow.date}>{this.props.replyDate}</Text>
          </View>
          <Text style={styles.textRow2}>{this.props.reviewContent}</Text>
          <View style={[styles.bottomRow.container, styles.reviewOnly.bottomRow]}>
            <TouchableOpacity style={styles.bottomRow.like.wrapper} disabled={!this.props.onLikePress} onPress={this.props.onLikePress}>
              <Image style={styles.bottomRow.like.icon} source={ImageSource.home.praise}/>
              <Text style={styles.bottomRow.like.count}>{this.props.likeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={styles.hitSlop} style={styles.bottomRow.reply.wrapper} disabled={!this.props.onReplyPress} onPress={this.props.onReplyPress}>
              <Text style={styles.bottomRow.reply.text}>回复</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ReviewCard;