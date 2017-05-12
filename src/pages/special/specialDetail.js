import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import pageStyles from './specialDetail.style';
import AutoSizeImage from '../../components/common/autoSizeImage';
import { DEVICE_WIDTH } from '../../constants/global';
import imageSource from '../../constants/imageSource';
import styles from '../../components/common/styles';

class SpecialDetail extends Component {
  static navigationOptions = {
    title: '超远距离接吻神器'
  };

  render() {
    return (
      <View style={pageStyles.container}>
        <ScrollView>
          <Text style={pageStyles.title}>
            超远距离接吻神器：KISS还是要提高自己的姿势水平
          </Text>
          <Text style={pageStyles.info}>发表时间：2017-3-3</Text>
          <View>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
            <AutoSizeImage source={require('../../data/product/banner.png')} style={pageStyles.image} width={DEVICE_WIDTH - 20}/>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
            <AutoSizeImage source={require('../../data/product/banner.png')} style={pageStyles.image} width={DEVICE_WIDTH - 20}/>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
            <Text style={pageStyles.mainFont}>
              在人手一部智能型手机的时代，异地恋的情侣们想要看见对方的影像、听见对方的声音是很简单没错，不过却无法感受到体温。
            </Text>
          </View>
        </ScrollView>
        <View style={pageStyles.footCtrl.box}>
          <View style={pageStyles.footCtrl.item}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
            }}>
              <Image source={imageSource.components.zan} style={[styles.icon, pageStyles.footCtrl.icon]}/>
              <Text>2023</Text>:
            </TouchableOpacity>
          </View>
          <View style={pageStyles.footCtrl.item}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('ReviewList');
            }}>
              <Text>评论</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SpecialDetail;