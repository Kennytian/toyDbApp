/* @flow */

import React from 'react';
import { Image, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import imageSource from '../constants/imageSource';

import Home from '../pages/home/index';
import Borrowing from '../pages/toyDb/index';
import MyCenter from '../pages/myCenter/index';

const styles = {
    btn: {
        borderRadius: 36,
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    }
};

const HomeTabRouter = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <View style={[styles.btn, {backgroundColor: tintColor}]}>
                    <Image source={imageSource.icon_home} style={[styles.icon]}/>
                </View>
            )
        }
    },
    Borrowing: {
        screen: Borrowing,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (

                <View style={[styles.btn, {backgroundColor: tintColor}]}>
                    <Image source={imageSource.icon_toy} style={[styles.icon]}/>
                </View>
            )
        }
    },
    MyCenter: {
        screen: MyCenter,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <View style={[styles.btn, {backgroundColor: tintColor}]}>
                    <Image source={imageSource.icon_my} style={[styles.icon]}/>
                </View>
            )
        }
    }
}, {
    animationEnabled: true, // 切换页面时显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 允许页面左右侧滑
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        showLabel: false,
        inactiveTintColor: 'white',
        activeTintColor: '#ffcc66', // 文字和图片选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线
        style: {
            backgroundColor: '#fff' // TabBar 背景色
        },
        iconStyle: {
            marginTop: 13
        },
        tabStyle: {
            height: 45
        }
    }
});

export default HomeTabRouter;