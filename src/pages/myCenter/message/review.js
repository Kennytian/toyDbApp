import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './style';

class PageComponent extends Component {
  static navigationOptions = {
    title: '我的消息'
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }

}
export default PageComponent;