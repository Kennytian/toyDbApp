import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './index.style';
import imageSource from '../../constants/imageSource';

class MyCenter extends Component {

  _renderButton = (func, icon, text) => {
    return (
      <TouchableOpacity style={[styles.public, styles.borderBottom]} onPress={func}>
        <Image source={icon} style={styles.mypic}/>
        <Text style={styles.mytext}>{text}</Text>
        <Image source={imageSource.myCenter.rightBtn} style={styles.arrows}/>
      </TouchableOpacity>
    );
  };
  ccc=()=>{
    alert(1);
  }
  render() {
    return (
     <View style={styles.myCenterWrap}>
        <View style={styles.tittle}>
          <Text style={styles.center}>个人中心</Text>
          <TouchableOpacity  style={styles.setImage} onPress={()=>{alert(1);}}>
            <Image
                source={imageSource.myCenter.set}
            />
          </TouchableOpacity>
        </View>
       <Image
         style={styles.headerImg}
         source={imageSource.myCenter.headerImg}
       >
         <View style={styles.userName}>
         <Text>用户名</Text>
         </View>
       </Image>
      <View style={styles.main}>
        {this._renderButton(this.ccc, imageSource.myCenter.message, '我的消息')}
        {this._renderButton(this.ccc, imageSource.myCenter.browsingHistory, '浏览记录')}
        {this._renderButton(this.ccc, imageSource.myCenter.clean, '清理缓存')}
      </View>
       <TouchableOpacity style={styles.exit}>
         <Text style={styles.exitText}>退出登录</Text>
       </TouchableOpacity>
     </View>
    );
  }
}
export default MyCenter;
