/* @flow */

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  FlatList
} from 'react-native';

import imageSource from './../../constants/imageSource';
import Title from '../../components/common/title';
import SearchBar from '../../components/common/searchBar';
import { ScanButton } from '../../components/common/iconButton';
import ImageCard from '../../components/cards/imageCard';

import HotContent from './../../components/common/hotContent';

import styles from './index.style';

let data = [
  {key: 'a', source: imageSource.home.pic_three, text: '世界游戏周边'},
  {key: 'b', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'c', source: imageSource.home.pic_three, text: '世界游戏周边'},
  {key: 'd', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'e', source: imageSource.home.pic_three, text: '界游戏周边'},
  {key: 'f', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'g', source: imageSource.home.pic_three, text: '游戏周边'},
  {key: 'h', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'i', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'j', source: imageSource.home.pic_four, text: '我的世界游戏周边'}
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tittleText: '热门专题',
      hotTittle: '热门内容',
      rightText: '更多',
      placeholderText: '请输入关键字',
      hotText: '超远距离接吻神器：KISS还是要提高自己的姿势水平',
      releaseTime: '发布时间',
      Time: '2017-3-3',
      number: '1211',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      dataSourceAnother: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      dataSourceAnother: this.state.dataSource.cloneWithRows(data)
    });
  }

  onTextValue = (text) => {
    this.setState({
      textvalue: text
    });
  }

  _onScan = () => {
    alert('扫描功能开发中...');
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchBarView}>
          <SearchBar placeholderText="请输入关键字" onChangeText={this.onTextValue}/>
          <ScanButton onPress={this._onScan}/>
        </View>
        <View style={styles.swiperView}>
          <Image style={styles.swiperHolderImage} source={imageSource.home.banner}/>
        </View>
        <Title
          titleImg={imageSource.home.tittleImgOne}
          titleText={this.state.tittleText}
          rightText={this.state.rightText}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Title
          titleImg={imageSource.home.tittleImgTwo}
          titleText={'热门内容'}
        />
        <ListView
          dataSource={this.state.dataSourceAnother}
          renderRow={this.renderItemAnother}
        />
      </ScrollView>
    );
  }

  renderItem = (data) => {
    return (
      <ImageCard width={140} height={70} text={data.text} style={{marginLeft: 10}} source={data.source}/>
    );
  }

  renderItemAnother = (data) => {
    return (
      <HotContent
        HotImg={data.source}
        onPrasie={() => {
          alert(1);
        }}
        hotText={this.state.hotText}
        number={this.state.number}
        Time={this.state.Time}
        releaseTime={this.state.releaseTime}
      />
    );
  }

}