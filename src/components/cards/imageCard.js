/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/toyDb';
import Colors from '../../constants/colors';
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

    // http://jamestw.logdown.com/posts/257890-257890-reactjs-prop
  };

  _renderTitle() {
    if (this.props.text) {
      let textStyle = styles.imageCard.title.text;
      let maskStyle = styles.imageCard.title.mask;
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