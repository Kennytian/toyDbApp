import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import colors from '../../../constants/colors';
import { BORDER_WIDTH } from '../../../constants/global';
import Support from './support';
import Review from './review';

let tabStyles = {
  box: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: colors.borderBottom,
    borderBottomWidth: BORDER_WIDTH,
    height: 40
  },
  item: {
    fontWeight: 'bold',
    fontSize: 16
  }
};

const PageComponent = TabNavigator({
  Review: {
    screen: Review,
    navigationOptions: {
      tabBarLabel: '评论'
    }
  },
  Support: {
    screen: Support,
    navigationOptions: {
      tabBarLabel: '点赞'
    }
  }
}, {
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    activeTintColor: '#7ba9f6',
    inactiveTintColor: '#666', // 文字和图片默认颜色
    animationEnabled: true,
    swipeEnabled: false,
    lazyLoad: true,
    style: tabStyles.box,
    labelStyle: tabStyles.item
  },
  tabBarPosition: 'top'
});

export default PageComponent;