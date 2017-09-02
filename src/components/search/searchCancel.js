/* @flow */

import React, { PureComponent } from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';
import SearchInput from './input';
import styles from './style';
import colors from '../../constants/colors';

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
    return (
      <View style={styles.searchView}>
        <SearchInput {...this.props} autoFocus={true} onSubmit={(e) => this.onSubmit(e)} />
        <TouchableOpacity style={styles.searchCancel} onPress={() => this.props.navigation.goBack()}>
          <Text style={{ color: colors.blue }}>取消</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onSubmit(event) {
    let val = event.nativeEvent.text;
    this.props.navigation.navigate('SearchResult', { q: val });
  }
}

export default Search;