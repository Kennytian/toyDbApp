/* @flow */

import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './login.style';
import imageSource from '../../constants/imageSource';

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderPhoneNumView() {
    return (
      <View style={styles.phoneNumView.container}>
        <View style={styles.phoneNumView.wrapper}>
          <TextInput placeholder="+86" placeholderTextColor={styles.placeholderTextColor} underlineColorAndroid={styles.underline} style={styles.phoneNumView.code} keyboardType={styles.keyboardType} maxLength={3}/>
        </View>
        <View style={[styles.phoneNumView.wrapper, {marginLeft: 25, flex: 1}]}>
          <TextInput placeholder="请输入手机号" placeholderTextColor={styles.placeholderTextColor} underlineColorAndroid={styles.underline} style={styles.phoneNumView.phone} keyboardType={styles.keyboardType} maxLength={11} clearButtonMode={'while-editing'}/>
        </View>
      </View>
    );
  }

  _renderValidateCodeView() {
    return (
      <View style={styles.validateCodeView.wrapper}>
        <TextInput placeholder="请输入验证码" placeholderTextColor={styles.placeholderTextColor} underlineColorAndroid={styles.underline} style={styles.validateCodeView.phone}
                   keyboardType={styles.keyboardType} maxLength={11} clearButtonMode={'while-editing'}/>
        <TouchableOpacity style={styles.validateCodeView.btn.wrapper} activeOpacity={styles.activeOpacity}>
          <Text style={styles.validateCodeView.btn.text}>获取验证码</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderLoginView() {
    return (
      <TouchableOpacity style={styles.loginButton.wrapper} activeOpacity={styles.activeOpacity}>
        <Text style={styles.loginButton.text}>登录</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Image resizeMode="cover" style={styles.container} source={imageSource.auth.bg}>
        {this._renderPhoneNumView()}
        {this._renderValidateCodeView()}
        {this._renderLoginView()}
      </Image>
    );
  }

}

export default Login;