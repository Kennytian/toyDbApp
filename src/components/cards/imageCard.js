/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Platform, Text, TouchableOpacity } from 'react-native';

import { DEVICE_WIDTH } from '../../../src/constants/global';
import { ACTIVE_OPACITY } from '../../../src/constants/toyDb';
import Colors from '../../../src/constants/colors';

const styles = {
  container: {},
  image: {
    height: 120,
    width: DEVICE_WIDTH - 20,
    borderRadius: 10
  },
  title: {
    mask: {
      backgroundColor: Colors.alphaBlack,
      height: 30,
      justifyContent: 'center',
      borderBottomLeftRadius: Platform.select({ios: 10, android: 0}),
      borderBottomRightRadius: Platform.select({ios: 10, android: 0}),
      marginTop: 120 - 30
    },
    text: {
      fontSize: 16,
      color: Colors.white,
      marginLeft: 10
    }
  }
};

class ImageCard extends Component {
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
    source: PropTypes.number.isRequired

    // http://jamestw.logdown.com/posts/257890-257890-reactjs-prop
  };

  _renderTitle() {
    if (this.props.text) {
      let textStyle = styles.title.text;
      let maskStyle = styles.title.mask;
      if (this.props.height > 50) {
        maskStyle = [maskStyle, {marginTop: this.props.height - 30}];
      }

      if (this.props.titlePosition === 'center') {
        textStyle = [textStyle, {marginLeft: 0, alignSelf: 'center'}];
        maskStyle = [maskStyle, {backgroundColor: Colors.transparent, marginTop: 80}];
      } else if (this.props.titlePosition === 'right') {
        textStyle = [textStyle, {alignSelf: 'flex-end', marginRight: 10}];
      }
      return (
        <View style={maskStyle}>
          <Text style={textStyle}>{this.props.text}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    let imageStyle = styles.image;
    if (this.props.height > 50) {
      imageStyle = [imageStyle, {height: this.props.height}];
    }
    if (this.props.width > 60) {
      imageStyle = [imageStyle, {width: this.props.width}];
    }

    return (
      <TouchableOpacity style={styles.container} disabled={!this.props.onPress} activeOpacity={ACTIVE_OPACITY}>
        <Image style={imageStyle} source={this.props.source} resizeMode={Image.resizeMode.stretch}>
          {this._renderTitle()}
        </Image>
      </TouchableOpacity>

    );
  }
}

export default ImageCard;