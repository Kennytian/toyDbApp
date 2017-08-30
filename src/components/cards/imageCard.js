/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/toyDb';
import styles from './styles';

class ImageCard extends Component {
  static defaultProps = {
    titlePosition: 'left',
    hasMask: true,
    onPress: null
  };

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.any,
    text: PropTypes.string,
    onPress: PropTypes.func,
    titlePosition: PropTypes.oneOf(['left', 'center', 'right']),
    source: PropTypes.number.isRequired
  };

  _renderTitle() {
    let {text, hasMask, titlePosition} = this.props;
    if (text) {
      let textStyle = styles.imageCard.title.text;
      let maskStyle;
      if (!hasMask) {
        maskStyle = {backgroundColor: 'transparent'};
      }
      return (
        <View style={[styles.imageCard.title.mask, maskStyle]}>
          <Text style={[textStyle, {'textAlign': titlePosition}]}
            ellipsizeMode={'tail'} numberOfLines={1}>{this.props.text}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    let imageStyle = styles.imageCard.image;
    let {width, height} = this.props;
    if (width) {
      imageStyle = [imageStyle, {width: width}];
    }
    if (height) {
      imageStyle = [imageStyle, {height: height}];
    }

    return (
      <TouchableOpacity style={this.props.style} disabled={!this.props.onPress} activeOpacity={ACTIVE_OPACITY}>
        <Image style={imageStyle} source={this.props.source} resizeMode={Image.resizeMode.stretch}>
          {this._renderTitle()}
        </Image>
      </TouchableOpacity>

    );
  }
}

export default ImageCard;