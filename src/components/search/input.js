import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import imageSource from './../../constants/imageSource';
import Colors from './../../constants/colors';
import styles from './style';


class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Image style={styles.inputImg} source={imageSource.home.input}>
        <TouchableOpacity>
          <Image style={styles.sourceImg} source={imageSource.home.search}/>
        </TouchableOpacity>
        <TextInput onFocus={this.props.onFocus}
          autoFocus={this.props.autoFocus}
          style={styles.textInputView}
          underlineColorAndroid="transparent"
          placeholder='输入关键词'
          keyboardType="numeric"
          placeholderTextColor={Colors.inputColor}
          defaultValue={this.props.value}
          returnKeyType="search"
          onSubmitEditing={this.props.onSubmit}/>
      </Image>
    );
  }
}

export default Search;