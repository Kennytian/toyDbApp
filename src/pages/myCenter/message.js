import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ImageSource from './../../constants/imageSource';

class PageComponent extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: '我的消息'
  };
  render() {
    return (
      <View>

      </View>
    );
  }

}
export default PageComponent;