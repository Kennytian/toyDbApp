/* @flow */

import React, { PureComponent } from 'react';
import {
  View
} from 'react-native';
import SearchInput from './input';
import SearchScan from './scan';
import styles from './style';

type Props = {};
type State = {};

class Search extends PureComponent<void, Props, State> {
  static propTypes = {
    navigation: React.PropTypes.object
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style={styles.searchView}>
        <SearchInput onFocus={() => navigate('Search')} />
        <SearchScan onPress={() => navigate('ScanPreview')} />
      </View>
    );
  }
}

export default Search;