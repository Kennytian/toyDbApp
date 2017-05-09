/* @flow */

import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';

import { SettingsButton } from '../../components/common/iconButton';
import InformationList from '../../components/common/informationList';

import ImageSource from '../../constants/imageSource';

import styles from './index.style';

class MyCenter extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: '个人中心',
    headerRight: <SettingsButton style={{marginRight: 10}} onPress={() => navigation.navigate('PersonalChange', {})}/>
  });

  _navigateTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  ccc = () => {
    alert('Hello');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.myCenterWrap}>
          <Image style={styles.headerImg} source={ImageSource.myCenter.headerImg}>
            <View style={styles.userName}>
              <Text>用户名</Text>
            </View>
          </Image>
          <View style={styles.main}>
            <InformationList
              press={() => this._navigateTo('DevEntry')}
              icon={ImageSource.myCenter.message}
              text="开发入口"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
            <InformationList
              press={this.ccc}
              icon={ImageSource.myCenter.message}
              text="我的消息"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
            <InformationList
              press={this.ccc}
              icon={ImageSource.myCenter.browsingHistory}
              text="浏览记录"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
            <InformationList
              press={this.ccc}
              icon={ImageSource.myCenter.clean}
              text="清理缓存"
              rightBtn={ImageSource.myCenter.rightBtn}
            />
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
