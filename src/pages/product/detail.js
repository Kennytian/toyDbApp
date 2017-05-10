/* @flow */

import React, { Component } from 'react';
import { FlatList, ScrollView, Image, Text, View } from 'react-native';

import { deepCompare } from '../../utils/optimizer';

import ErrorView from './../../components/common/errorView';
import LoadingView from './../../components/common/loadingView';
import Title from '../../components/common/title';
import colors from '../../constants/colors';
import imageSource from '../../constants/imageSource';
import globalStyles from '../../components/common/styles';
import styles from './components/style';
import data from '../../data/toy';
import ToyItem from '../toyDb/components/item';
import toyListStyles from '../toyDb/components/index.style';
import Header from './components/header';
import Tab from './components/tab';

class ProductDetail extends Component {
  static navigationOptions = {
    title: '乐高积木玩具'
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
        <Header/>
        <Tab active="detail" navigation={this.props.navigation}/>
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
    console.log(item);
    return (
      <ToyItem item={item} onPressManufacturer={() => {
        this._navTo('ManufacturerDetail');
      }}/>
    );
  }
}

export default ProductDetail;