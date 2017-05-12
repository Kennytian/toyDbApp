import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import data from '../../data/special';
import HotContent from './../../components/common/hotContent';

class PageComponent extends Component {
  static navigationOptions = {
    title: '浏览记录'
  };

  constructor(props) {
    super(props);
    this.state = {
      titleText: '热门专题',
      hotTitle: '热门内容',
      rightText: '更多',
      hotText: '超远距离接吻神器KISS还是要提高自己的姿势水平',
      releaseTime: '发布时间',
      Time: '2017-3-3',
      number: '1211'
    };
  }

  render() {
    return (
      <ScrollView>
        {this._renderList()}
      </ScrollView>
    );
  }

  _renderList() {
    return (
      <FlatList data={data} renderItem={({item}) => this.renderItem(item)} refreshing={false}/>
    );
  }

  renderItem = (data) => {
    return (
      <HotContent
        HotImg={data.source}
        onPress={() => {
          this.props.navigation.navigate('SpecialDetail');
        }}
        hotText={this.state.hotText}
        number={this.state.number}
        Time={this.state.Time}
        releaseTime={this.state.releaseTime}
      />
    );
  }
}
export default PageComponent;