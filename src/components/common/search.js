import React, { Component } from 'react';
import { BORDER_WIDTH, DEVICE_WIDTH } from '../../constants/global';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from 'react-native';

import imageSource from './../../constants/imageSource';
import colors from './../../constants/colors';

const styles = {
  searchView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  inputImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 1
  },
  sourceImg: {
    marginLeft: 15
  },
  textInputView: {
    marginLeft: 13,
    flex: 1,
    height: 30,
    marginRight: 13
  },
  scanImg: {
    marginLeft: 13,
    marginRight: 10
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.searchView}>
        <Image style={styles.inputImg} source={imageSource.home.input}>
          <TouchableOpacity>
            <Image style={styles.sourceImg} source={imageSource.home.search}></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.textInputView}
            underlineColorAndroid="transparent"
            placeholder='输入关键词'
            keyboardType="numeric"
            placeholderTextColor={colors.inputColor}
            value={this.props.value}
            onChangeText={(text) => {
              this.onSearchChange(text);
            }}
          />
        </Image>
        <TouchableOpacity>
          <Image
            style={styles.scanImg}
            source={imageSource.home.scan}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onSearchChange() {

  }
}

export default Search;