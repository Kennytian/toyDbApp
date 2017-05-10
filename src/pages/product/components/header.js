import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { DEVICE_WIDTH } from '../../../constants/global';

let pageStyles = {
  banner: {
    width: DEVICE_WIDTH,
    height: 200
  }
};

class Header extends Component {

  render() {
    return this._renderContent();
  }

  _renderContent() {
    return (
      <View>
        <Image source={require('../../../data/product/banner.png')} style={pageStyles.banner}/>
      </View>
    );
  }
}

export default Header;