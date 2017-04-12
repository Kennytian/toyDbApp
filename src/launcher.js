/* @flow */

'use strict';

import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';

import XhrRequest from './utils/xhrRequest';

import FrameNavigator from './pages/frameNavigator';
import ProductList from './pages/product/productList';
import ProductDetail from './pages/product/productDetail';
import paymentChooser from './pages/payment/paymentChooser';

const ToyDbApp = StackNavigator({
  Main: {
    screen: FrameNavigator,
    navigationOptions: {
      header: {
        title: '玩具', // 默认后退标题文字
        style: {
          backgroundColor: '#fff'
        }
      }
    }
  },
  paymentChooser: {
    screen: paymentChooser,
    navigationOptions: {
      // header: {
      //   title: '支付选择', // 默认后退标题文字
      // }
    }
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: {}
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      // 建议为空，方便具体页面自定义
    }
  }
});

XhrRequest.run();

AppRegistry.registerComponent('toyDbApp', () => ToyDbApp);
