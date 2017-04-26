import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from '../../components/common/styles';

class PayWithAli extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '支付宝支付'
  });

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View>
        <Text>用支付宝支付</Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.welcome}>
            后退
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PayWithAli;