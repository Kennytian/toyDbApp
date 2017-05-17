/* @flow */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import SearchInput from './input';
import SearchScan from './scan';
import styles from './style';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: React.PropTypes.object
  };

  render() {
    return (
      <View style={styles.searchView}>
        <SearchInput onFocus={() => this.props.navigation.navigate('Search')}/>
        <SearchScan onPress={() => this.props.navigation.navigate('ScanPreview')}/>
      </View>
    );
  }
}

export default Search;