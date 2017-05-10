import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import imageSource from '../../constants/imageSource';
import Title from '../../components/common/title';
import pageStyles from './components/style';
import Star from './components/star';

class Exponent extends Component {
  render() {
    return (
      <View>
        <View style={pageStyles.grade.box}>
          <View style={pageStyles.grade.left}>
            <View style={pageStyles.grade.item}>
              <Text style={pageStyles.grade.label}>创新性</Text>
              <Star grade={4}/>
            </View>
            <View style={pageStyles.grade.item}>
              <Text style={pageStyles.grade.label}>信价比</Text>
              <Star grade={3}/>
            </View>
            <View style={pageStyles.grade.item}>
              <Text style={pageStyles.grade.label}>把玩度</Text>
              <Star grade={2}/>
            </View>
            <View style={pageStyles.grade.item}>
              <Text style={pageStyles.grade.label}>安全性</Text>
              <Star grade={4}/>
            </View>
            <View style={pageStyles.grade.item}>
              <Text style={pageStyles.grade.label}>趣味性</Text>
              <Star grade={5}/>
            </View>
          </View>
          <View style={[pageStyles.grade.right, pageStyles.grade.rightBorderBox]}>
            <View>
              <Text style={pageStyles.grade.score}>
                4.8
              </Text>
              <Text style={pageStyles.grade.tip}>综合评分</Text>
            </View>
          </View>
        </View>

        <View style={pageStyles.area}>
          <Title titleImg={imageSource.home.tittleImgTwo} titleText={'顽童指数'}/>
          <Text style={pageStyles.font}>迷你战车:金刚狼对战万磁王，超级英雄系列，迷你战车:金刚狼对战万磁王，超级英雄系列，迷你战车。</Text>
        </View>

        <View style={pageStyles.area}>
          <Title titleImg={imageSource.home.tittleImgTwo} titleText={'猜你喜欢'}/>
        </View>
      </View>
    );
  }
}

export default Exponent;