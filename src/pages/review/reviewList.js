import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import data from '../../data/review';
import ReviewListItem  from '../../containers/reviewListItem';

class ReviewList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '消息列表'
  });

  state = {
    tabSelectedIndex: 0
  };

  _navTo(name) {
    const {navigate} = this.props.navigation;
    navigate(name);
  }

  _renderList() {

    return (
      <FlatList contentContainerStyle={{alignItems: 'center'}} data={data}
                renderItem={ReviewListItem} refreshing={false} onRefresh={this._onRefresh}/>
    );
  }

  _onRefresh = () => {
    console.debug('onRefresh', new Date());
  }

  render() {
    return (
      <View>
        {this._renderList()}
      </View>
    );
  }
}

export default ReviewList;