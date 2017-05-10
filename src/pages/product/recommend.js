import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import HotContent from './../../components/common/hotContent';
import data from '../../data/recommend';

class Exponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: '热门专题',
      hotTitle: '热门内容',
      rightText: '更多',
      hotText: '超远距离接吻神器：KISS还是要提高自己的姿势水平',
      releaseTime: '发布时间',
      Time: '2017-3-3',
      number: '1211',
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

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
        />
      </View>
    );
  }


  renderItem = (data) => {
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

export default Exponent;