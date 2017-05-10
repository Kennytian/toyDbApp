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
    let {text, hasMask} = this.props;
    if (text) {
      let textStyle = styles.imageCard.title.text;
      let maskStyle;
      if (!hasMask) {
        maskStyle = {backgroundColor: 'transparent'};
      }
      return (
        <View style={[styles.imageCard.title.mask, maskStyle]}>
          <Text style={textStyle}
                ellipsizeMode={'tail'} numberOfLines={1}>{this.props.text}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    let imageStyle = styles.imageCard.image;
    let {width, height} = this.props;

    return (
      <TouchableOpacity style={this.props.style} disabled={!this.props.onPress} activeOpacity={ACTIVE_OPACITY}>
        <Image style={[imageStyle, {width, height}]} source={this.props.source} resizeMode={Image.resizeMode.stretch}>
          {this._renderTitle()}
        </Image>
      </TouchableOpacity>

    );
  }
}

export default ImageCard;