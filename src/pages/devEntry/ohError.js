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
    const {navigate} = this.props.navigation;
    return (
      <ErrorView/>
    );
  }
}

