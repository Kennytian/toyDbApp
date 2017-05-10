/* @flow */

import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Colors from '../../../constants/colors';
import styles from '../../../components/common/styles';
import imageCardStyles from '../../../components/cards/styles';
import ImageSource from './../../../constants/imageSource';
import { DEVICE_WIDTH } from '../../../constants/global';
import ImageCard from '../../../components/cards/imageCard';

const pageStyles = {
  item: {
    width: (DEVICE_WIDTH - 60) * .5,
    margin: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
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

  render() {
    let {item} = this.props;
    return (
      <TouchableOpacity style={pageStyles.item} disabled={!this.props.onPress}>
        <ImageCard width={'auto'} height={90} source={item.source} text={item.title}/>
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