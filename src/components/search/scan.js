/* @flow */

import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

import imageSource from './../../constants/imageSource';
import styles from './style';

type Props = {};
type State = {};

class Search extends PureComponent<void, Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image style={styles.scanImg} source={imageSource.home.scan}/>
      </TouchableOpacity>
    );
  }
}

export default Search;