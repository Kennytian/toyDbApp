import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ListView, ScrollView } from 'react-native';
import Search from './../../components/common/search';
import styles from '../../components/common/styles';
import ToyItem from './components/item';
import data from '../../data/toy';
import imageSource from '../../constants/imageSource';
import colors from './../../constants/colors';
import { BORDER_WIDTH } from '../../constants/global';

let pageStyles = {
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },
  filter: {
    box: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      borderBottomColor: colors.borderBottom,
      borderBottomWidth: BORDER_WIDTH
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    }
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
        <View style={pageStyles.filter.box}>
          <View style={pageStyles.filter.item}>
            <Text>热度</Text>
            <Image source={imageSource.toyDb.select} style={{marginLeft: 5}}/>
          </View>
          <View style={[pageStyles.filter.item, {borderLeftColor: colors.borderColor, borderLeftWidth: BORDER_WIDTH}]}>
            <Text>筛选</Text>
            <Image source={imageSource.toyDb.filter} style={{marginLeft: 5}}/>
          </View>
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
