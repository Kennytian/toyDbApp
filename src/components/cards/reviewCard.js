/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Platform, Text, TouchableOpacity } from 'react-native';

import { DEVICE_WIDTH, BORDER_WIDTH } from '../../../src/constants/global';
import Colors from '../../../src/constants/colors';

const styles = {
  container: {
    padding: 9,
    borderRadius: 5
  },
  textRow1: {
    fontSize: 10.5,
    fontWeight: '300'
  },
  textRow2: {
    fontSize: 11,
    fontWeight: '300',
    lineHeight: 12
  },
  splitLine: {
    marginTop: 8,
    marginBottom: 8,
    height: BORDER_WIDTH,
    backgroundColor: Colors.borderColor
  },
  reply: {
    marginTop: 5,
    backgroundColor: Colors.borderBottom,
    padding: 5,
    borderRadius: 5,
  },
  textRow3: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15
  },
  bottomRow: {
    container: {
      flexDirection: 'row'
    },
    date: {
      flex: 2,
      fontSize: 9,
      fontWeight: '300',
      color: Colors.borderColor,
    },
    like: {
      wrapper: {
        flex: 0.5,
      },
      icon: {},
      count: {
        fontSize: 9,
        fontWeight: '300',
        color: Colors.borderColor,
        textAlign: 'right'
      },
    },
    reply: {
      flex: 0.5,
      fontSize: 9,
      fontWeight: '300',
      color: Colors.tabColor,
      textAlign: 'right',
    }
  }
};

class ReviewCard extends Component {
  static defaultProps = {
    titlePosition: 'left',
    onPress: null
  };

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func,
    titlePosition: PropTypes.oneOf(['left', 'center', 'right']),
    // source: PropTypes.number.isRequired

    reviewerName: PropTypes.string.isRequired,

    // http://jamestw.logdown.com/posts/257890-257890-reactjs-prop
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textRow1}>{this.props.reviewerName}回复了你的评论</Text>
        <View style={styles.splitLine}/>
        <Text style={styles.textRow2}>评论内容：{this.props.reviewContent}</Text>
        <View style={styles.reply}>
          <Text style={styles.textRow3}>{this.props.replyContent}</Text>
        </View>
        <View style={styles.splitLine}/>
        <View style={styles.bottomRow.container}>
          <Text style={styles.bottomRow.date}>{this.props.replyDate}</Text>
          <View style={styles.bottomRow.like.wrapper}>

            <Text style={styles.bottomRow.like.count}>{this.props.likeCount}</Text>
          </View>
          <Text style={styles.bottomRow.reply}>回复</Text>
        </View>
      </View>
    );
  }
}

export default ReviewCard;