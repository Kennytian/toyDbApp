import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

import imageSource from './../../constants/imageSource';
import styles from './style';

class Search extends Component {
  constructor(props) {
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