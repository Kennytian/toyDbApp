/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Colors from '../../../constants/colors';
import styles from '../../../components/common/styles';
import imageCardStyles from '../../../components/cards/styles';
import ImageSource from './../../../constants/imageSource';
import { DEVICE_WIDTH } from '../../../constants/global';

const pageStyles = {
  item: {
    width: (DEVICE_WIDTH - 60) * .5,
    margin: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: 'auto',
    height: 90,
    marginBottom: 10
  },
  views: {
    flexDirection: 'row'
  }
};

class ToyItem extends Component {
  static defaultProps = {
    titlePosition: 'left',
    onPress: null
  };

  static propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.object.isRequired
  };

  _renderTitle() {
    let {item} = this.props;
    let textStyle = imageCardStyles.imageCard.title.text;
    return (
      <View style={imageCardStyles.imageCard.title.mask}>
        <Text style={textStyle} ellipsizeMode={'tail'} numberOfLines={1}>{item.title}</Text>
      </View>
    );
  }

  render() {
    let imageStyle = imageCardStyles.imageCard.image;
    let {item} = this.props;
    return (
      <TouchableOpacity style={pageStyles.item} disabled={!this.props.onPress}>
        <Image style={[imageStyle, pageStyles.imageStyle]} source={item.source} resizeMode={Image.resizeMode.stretch}>
          {this._renderTitle()}
        </Image>
        <View style={pageStyles.info}>
          <Text style={[styles.size16, {color: Colors.gray6}]}>厂家:{item.company}</Text>
          <View style={pageStyles.views}>
            <Image source={ImageSource.toyDb.views} style={{top: 4}}/>
            <Text style={{marginLeft: 5, color: Colors.gray9}}>{item.views}</Text></View>
        </View>
      </TouchableOpacity>

    );
  }
}

export default ToyItem;