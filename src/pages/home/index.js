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

import styles from '../../components/common/styles';

import imageSource from './../../constants/imageSource';
import Colors from './../../constants/colors';
import Tittle from './../../components/common/tittle';
import Search from './../../components/common/search';
import HotContent from './../../components/common/hotContent';

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
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderItem}
              horizontal = {true}
              showsHorizontalScrollIndicator={false}
            />
        <Tittle
          titleImg={imageSource.home.tittleImgTwo}
          titleText={this.state.hotTittle}
        />
        <ListView
          dataSource={this.state.dataSourceAnother}
          renderRow={this.renderItemAnother}
        />
       {/* <Text style={styles.welcome}>
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
        </TouchableOpacity>*/}
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

  renderItemAnother=(data)=>{
    return(
      <HotContent
        HotImg={data.source}
        onPrasie={()=>{alert(1);}}
        hotText={this.state.hotText}
        number={this.state.number}
        Time={this.state.Time}
        releaseTime={this.state.releaseTime}
      />
    );
  }

}