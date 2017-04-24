import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './../styles';

class PayWithWeChat extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '微信支付'
  });

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View>
        <Text>用微信支付</Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.welcome}>
            后退
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PayWithWeChat;