/* @flow */
'use strict';

import React,{Component} from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import AppInit from './appInit';
import configureStore from './stores/configureStore';
import XhrRequest from './utils/xhrRequest';

import RootRouter from './routers/rootRouter';

const store = configureStore();
const init = new AppInit();

export default class Launcher extends Component {
  componentWillMount() {
    init.appWillMount();
  }

  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }

  componentDidMount() {
    init.appDidMount();
  }

  componentWillUnmount() {
    init.appWillUnmount();
  }
}

XhrRequest.run();

AppRegistry.registerComponent('toyDbApp', () => Launcher);
