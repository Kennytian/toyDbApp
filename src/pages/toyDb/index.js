import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native';
import Search from './../../components/common/search';
import styles from '../../components/common/styles';
import ToyItem from './components/item';
import data from '../../data/toy';
let pageStyles = {
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  }
};

export default class Borrowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Search/>
        <View style={{}}>

        </View>

        <ListView contentContainerStyle={pageStyles.list}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderItem}/>
      </ScrollView>
    );
  }

  renderItem(item) {
    return (
      <ToyItem item={item}/>
    );
  }
}
