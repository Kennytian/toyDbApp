/* @flow */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';

import ImageSource from '../../constants/imageSource';
import styles from './index.style';

class MyCenter extends Component {
  _renderButton = (func, icon, text) => {
    return (
      <TouchableOpacity style={[styles.public, styles.borderBottom]} onPress={func}>
        <Image source={icon} style={styles.mypic}/>
        <Text style={styles.mytext}>{text}</Text>
        <Image source={ImageSource.myCenter.rightBtn} style={styles.arrows}/>
      </TouchableOpacity>
    );
  };

  ccc = () => {
    alert(1);
  };

  _navigateTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.myCenterWrap}>
          <View style={styles.tittle}>
            <Text style={styles.center}>个人中心</Text>
            <TouchableOpacity style={styles.setImage} onPress={() => {
              alert(1);
            }}>
              <Image source={ImageSource.myCenter.set}/>
            </TouchableOpacity>
          </View>
          <Image style={styles.headerImg} source={ImageSource.myCenter.headerImg}>
            <View style={styles.userName}>
              <Text>用户名</Text>
            </View>
          </Image>
          <View style={styles.main}>
            {this._renderButton(() => this._navigateTo('DevEntry'), ImageSource.myCenter.message, '开发入口')}
            {this._renderButton(this.ccc, ImageSource.myCenter.message, '我的消息')}
            {this._renderButton(this.ccc, ImageSource.myCenter.browsingHistory, '浏览记录')}
            {this._renderButton(this.ccc, ImageSource.myCenter.clean, '清理缓存')}
          </View>
          <TouchableOpacity style={styles.exit}>
            <Text style={styles.exitText}>退出登录</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default MyCenter;
