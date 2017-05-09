/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/toyDb';
import styles from './styles';

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
  };

  _renderTitle() {
    if (this.props.text) {
      let textStyle = styles.imageCard.title.text;
      return (
        <Text style={[textStyle, {marginRight: 10, marginTop: 45, backgroundColor: 'transparent', alignSelf: 'center', flex: 1}]}
              ellipsizeMode={'tail'} numberOfLines={1}>{this.props.text}</Text>
      );
    }
    return null;
  }

  render() {
    let imageStyle = styles.imageCard.image;
    if (this.props.height > 50) {
      imageStyle = [imageStyle, {height: this.props.height}];
    }
    if (this.props.width > 60) {
      imageStyle = [imageStyle, {width: this.props.width}];
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