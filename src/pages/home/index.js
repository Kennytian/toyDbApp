import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

import styles from '../styles';

import imageSource from './../../constants/imageSource';
import Colors from './../../constants/colors';
import Tittle from './../../components/common/tittle';
import Search from './../../components/common/search';

var
  data=[
  {key: 'a', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'b', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'c', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'd', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'e', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'f', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'g', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'h', source: imageSource.home.pic_four, text: '我的世界游戏周边'},
  {key: 'i', source: imageSource.home.pic_three, text: '我的世界游戏周边'},
  {key: 'j', source: imageSource.home.pic_four, text: '我的世界游戏周边'}
  ];

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      tittleText: '热门专题',
      hotTittle: '热门内容',
      rightText: '更多',
      placeholderText: '请输入关键字',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  }

  onTextValue=(text)=>{
    this.setState({
      textvalue: text
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
          <Search
            placeholderText={this.state.placeholderText}
            value={this.state.textValue}
            onSearchChange={this.onTextValue}
          />
          <View>
            <Image
              source={imageSource.home.banner}
            />
          </View>
          <Tittle
            titleImg={imageSource.home.tittleImgOne}
            titleText={this.state.tittleText}
            rightText={this.state.rightText}
          />
          <View style={{flex: 1,marginBottom: 20}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderItem}
              horizontal = {true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        <Tittle
          titleImg={imageSource.home.tittleImgTwo}
          titleText={this.state.hotTittle}
        />
        <Text style={styles.welcome}>
          Welcome to Home!
        </Text>
        <TouchableOpacity onPress={() => navigate('Borrowing')}>
          <Text style={styles.welcome}>
            跳转到 玩具
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('MyCenter')}>
          <Text style={styles.welcome}>
            跳转到 我的
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('SpecialList')}>
          <Text style={styles.welcome}>
            跳转到 专题列表
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ProductList', {
          year: 2017,
          amount: 5000,
          name: 'Kenny'
        })}>
          <Text style={styles.welcome}>
            跳转到 产品
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  renderItem=(data)=>{
    return(
        <View style={{height: 70,marginTop: 10}}>
          <TouchableOpacity style={{height: 70, width: 140,marginLeft: 10}}>
            <Image source={data.source} style={{justifyContent: 'flex-end',alignItems: 'center',marginBottom: 7}}>
                <Text style={{color: Colors.white,fontSize: 16}}>{data.text}</Text>
            </Image>
          </TouchableOpacity>
        </View>
    );
  }

}