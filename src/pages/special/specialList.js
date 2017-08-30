/* @flow */

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { deepCompare } from '../../utils/optimizer';
import { createDeepEqualSelector } from '../../utils/reselect';

import ErrorView from './../../components/common/errorView';
import LoadingView from './../../components/common/loadingView';

import specialListItem  from '../../containers/specialListItem';
import data from '../../data/special';

class SpecialList extends Component {
  static navigationOptions = {
    title: '专题列表'
  };

  componentWillMount() {
    __DEV__ && console.debug('SpecialList componentWillMount:', new Date());
  }

  _renderList() {
    var {navigation} = this.props;
    return (
      <FlatList contentContainerStyle={{alignItems: 'center'}} data={data}
        renderItem={({item}) => specialListItem(item, navigation)}
        refreshing={false} onRefresh={this._onRefresh}/>
    );
  }

  _renderErrorView() {
    return <ErrorView text={this.props.errorMessage}/>;
  }

  _renderLoadingView() {
    return <LoadingView />;
  }

  render() {
    __DEV__ && console.debug('SpecialList render:', new Date());
    if (this.props.isFetching && !this.props.errorMessage) {
      return this._renderLoadingView();
    }

    if (this.props.errorMessage) {
      return this._renderErrorView();
    }

    return this._renderList();
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

export default SpecialList;

