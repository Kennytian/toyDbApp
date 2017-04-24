import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';
import RouteDispatcher from '../../utils/routeDispather';

import ErrorView from '../../components/common/errorView';

export default class OhError extends Component {
  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  //RouteDispatcher.backTo(this.props, 'Main', 'MyCenter');
  render() {
    const {goBack} = this.props.navigation;
    return (
      <ErrorView errText="小编正在努力中…" btnText="回到首页" btnOnPress={() => {
        goBack();
      }}/>
    );
  }
}

