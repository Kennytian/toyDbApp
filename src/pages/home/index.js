/* @flow */

import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native';

import styles from '../../components/common/styles';

import imageSource from './../../constants/imageSource';
import Title from './../../components/common/title';
import Search from './../../components/common/search';
import SearchBar from '../../components/common/searchBar';
import { ScanButton } from '../../components/common/iconButton';
import ImageCard from '../../components/cards/imageCard';

import HotContent from './../../components/common/hotContent';

var
  data = [
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
      titleText: '热门专题',
      hotTitle: '热门内容',
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

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Search placeholderText={this.state.placeholderText} value={this.state.textValue}
                onSearchChange={this.onTextValue}/>
        <View style={{flexDirection: 'row'}}>
          <SearchBar placeholderText="请输入关键字" onChangeText={this.onTextValue}/>
          <ScanButton onPress={() => {
          }}/>
        </View>
        <View><Image source={imageSource.home.banner}/></View>
        <Title
          titleImg={imageSource.home.tittleImgOne}
          titleText={this.state.titleText}
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
          titleText={this.state.hotTitle}
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
      <ImageCard width={140} height={70} text={data.text} style={{margin: 10}} source={data.source}/>
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