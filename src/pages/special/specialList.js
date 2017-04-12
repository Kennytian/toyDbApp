/* @flow */

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';

import { deepCompare } from '../../utils/optimizer';
import { createDeepEqualSelector } from '../../utils/reselect';

import SpecialListItem  from '../../containers/specialListItem';
import imageSource from '../../constants/imageSource';

import styles from './../styles';

class SpecialList extends Component {
  static navigationOptions = {
    title: '专题列表'
  };

  componentWillMount() {
    __DEV__ && console.debug('SpecialList componentWillMount:', new Date());
  }

  _renderList() {
    let data = [{key: 'a', source: imageSource.temp_image_card, text: '我的世界游戏周边'}, {key: 'b', source: imageSource.temp_image_card, text: '我的世界游戏周边'}, {
      key: 'c',
      source: imageSource.temp_image_card,
      text: '我的世界游戏周边'
    }, {
      key: 'd',
      source: imageSource.temp_image_card, text: '我的世界游戏周边'
    }, {key: 'e', source: imageSource.temp_image_card, text: '我的世界游戏周边'}, {key: 'f', source: imageSource.temp_image_card, text: '我的世界游戏周边'}, {
      key: 'g',
      source: imageSource.temp_image_card,
      text: '我的世界游戏周边'
    }, {
      key: 'h',
      source: imageSource.temp_image_card, text: '我的世界游戏周边'
    }, {key: 'i', source: imageSource.temp_image_card, text: '我的世界游戏周边'}, {key: 'j', source: imageSource.temp_image_card, text: '我的世界游戏周边'}];
    return (
      <FlatList contentContainerStyle={{alignItems: 'center'}} data={data} renderItem={SpecialListItem}/>
    );
  }

  render() {
    __DEV__ && console.debug('SpecialList render:', new Date());
    return (
      this._renderList()
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
}

let mapStateToProps = createDeepEqualSelector(
  [
    state => state.getIn(['auth', 'isFetching']),
    state => state.getIn(['loginErrCount', 'data', 'count'])
  ],
  (isFetching, errCount) => {
    return {
      isFetching,
      errCount
    };
  }
);

//export default connect(mapStateToProps)(SpecialList);
export default SpecialList;

