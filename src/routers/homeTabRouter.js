/* @flow */

import React from 'react';
import { Image } from 'react-native';

import { TabNavigator } from 'react-navigation';

import imageSource from '../constants/imageSource';

import Home from '../pages/home/index';
import Borrowing from '../pages/toyDb/index';
import MyCenter from '../pages/myCenter/index';

const styles = {
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
};

const HomeTabRouter = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '主页',
            tabBarIcon: ({tintColor}) => (
                <Image source={imageSource.btn_home_hover} style={[{tintColor: tintColor}, styles.icon]}/>
            )
        }
    },
    Borrowing: {
        screen: Borrowing,
        navigationOptions: {
            tabBarLabel: '玩具',
            tabBarIcon: ({tintColor}) => (
                <Image source={imageSource.btn_borrowing_hover} style={[{tintColor: tintColor}, styles.icon]}/>
            )
        }
    },
    MyCenter: {
        screen: MyCenter,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image source={imageSource.btn_mycenter_hover} style={[{tintColor: tintColor}, styles.icon]}/>
            )
        }
    }
}, {
    animationEnabled: true, // 切换页面时显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 允许页面左右侧滑
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FFBB15', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线
        style: {
            backgroundColor: '#fff' // TabBar 背景色
        },
        iconStyle: {
            marginTop: 13
        },
        labelStyle: {
            marginTop: 0,
            fontSize: 12 // 文字大小
        },
        tabStyle: {
            height: 45
        }
    }
});

export default HomeTabRouter;