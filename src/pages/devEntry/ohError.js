import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

import ErrorView from '../../components/common/errorView';

export default class OhError extends Component {
  render() {
    return (
      <ErrorView errText="小编正在努力中…" btnText="回到首页" btnOnPress={() => {
      }}/>
    );
  }
}

