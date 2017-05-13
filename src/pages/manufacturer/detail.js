/* @flow */

import React, { Component } from 'react';
import { FlatList, ScrollView, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { deepCompare } from '../../utils/optimizer';
import ErrorView from './../../components/common/errorView';
import LoadingView from './../../components/common/loadingView';
import Title from '../../components/common/title';
import Colors from '../../constants/colors';
import imageSource from '../../constants/imageSource';
import globalStyles from '../../components/common/styles';
import styles from './detail.style';
import data from '../../data/toy';
import ToyItem from '../toyDb/components/item';
import toyListStyles from '../toyDb/components/index.style';

class Manufacturer extends Component {
  static navigationOptions = {
    title: '乐高品牌'
  };

  componentWillMount() {
    __DEV__ && console.debug('SpecialList componentWillMount:', new Date());
  }

  _renderErrorView() {
    return <ErrorView text={this.props.errorMessage}/>;
  }

  _renderLoadingView() {
    return <LoadingView />;
  }

  render() {
    if (this.props.isFetching && !this.props.errorMessage) {
      return this._renderLoadingView();
    }

    if (this.props.errorMessage) {
      return this._renderErrorView();
    }

    return this._renderContent();
  }


  _renderContent() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image style={styles.banner.image} source={require('../../data/file/legao_banner.png')}>
            <View style={styles.banner.mask}>
              <Image style={styles.banner.logo} source={require('../../data/file/legao_logo.png')}/>
              <Text style={styles.banner.title}>乐高（LEGO）</Text>
              <Text style={{color: Colors.gray6}}>视频：123</Text>
            </View>
          </Image>
        </View>
        <View style={styles.desc.box}>
          <Text style={styles.desc.text}>
            乐高公司创办于丹麦，至今已有85年的发展历史，追本溯源，还得从它的金字招牌LEGO说起。商标“LEGO”的使用是从1932年开始，其语来自丹麦语“LEg GOdt”，意为“play
            well”（玩得快乐），并且该名字首先迅速成为乐高公司在Billund地区玩具工厂生产的优质玩具的代名词。的一所红房子中，那里就是乐高开始的地方。</Text>
          <View style={styles.desc.ctrl}>
            <Text style={{color: Colors.gray9}}>收起</Text>
            <Image source={imageSource.arrow_bot} style={globalStyles.hitSlopSm}/>
          </View>
        </View>
        <Title titleImg={imageSource.home.tittleImgTwo} titleText={'热门内容'}/>
        {
          this._renderList()
        }
      </ScrollView>
    );
  }

  componentDidMount() {
    __DEV__ && console.debug('SpecialList componentDidMount:', new Date());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return deepCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    __DEV__ && console.debug('SpecialList componentWillUnmount:', new Date());
  }

  _renderList() {
    return (
      <FlatList contentContainerStyle={toyListStyles.list} data={data} renderItem={({index, item}) => {
        if (index < 4) {
          return this._renderItem(item);
        }
        return null;
      }}/>
    );
  }

  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  _renderItem(item) {
    return (
      <ToyItem item={item} onPressManufacturer={() => {
        this._navTo('ManufacturerDetail');
      }} onPress={() => this._navTo('ProductDetail')}/>
    );
  }
}

export default Manufacturer;

