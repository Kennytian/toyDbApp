/* @flow */

import React, { Component } from 'react';
import { FlatList, ScrollView, Image, Text, View } from 'react-native';

import { connect } from 'react-redux';

import { deepCompare } from '../../utils/optimizer';
import { createDeepEqualSelector } from '../../utils/reselect';

import ErrorView from './../../components/common/errorView';
import LoadingView from './../../components/common/loadingView';
import Title from '../../components/common/title';


import imageSource from '../../constants/imageSource';

import styles from './detail.style';

class Manufacturer extends Component {
  static navigationOptions = {
    title: '厂商频道'
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
          <Image style={styles.holderImage} source={imageSource.temp_legao}>
            <Text>乐高（LEGO）</Text>
            <Text> 视频：123</Text>
          </Image>
        </View>
        <View>
          <Text style={styles.descText}>乐高公司创办于丹麦，至今已有85年的发展历史，追本溯源，还得从它的金字招牌LEGO说起。商标“LEGO”的使用是从1932年开始，其语来自丹麦语“LEg GOdt”，意为“play
            well”（玩得快乐），并且该名字首先迅速成为乐高公司在Billund地区玩具工厂生产的优质玩具的代名词。的一所红房子中，那里就是乐高开始的地方。</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.descText}>收起</Text>
          <Image/>
        </View>
        <Title titleImg={imageSource.home.tittleImgTwo} titleText={'热门内容'}/>
        <Image style={styles.holderImageHot} source={imageSource.temp_hot_product}></Image>
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

  _onRefresh = () => {
    console.debug('onRefresh', new Date());
  }
}

let mapStateToProps = createDeepEqualSelector(
  [
    state => state.getIn(['auth', 'isFetching']),
    state => state.getIn(['loginErrCount', 'data', 'count']),
    state => state.getIn(['star', 'items'])
  ],
  (isFetching, errCount, items) => {
    return {
      isFetching,
      errCount
    };
  }
);

//export default connect(mapStateToProps)(SpecialList);
export default Manufacturer;

