import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import imageSource from "./../../constants/imageSource";
import colors from './../../constants/colors';

const styles={
  inputImg:{
    flexDirection:'row',
    height:29,
    alignItems:'center',
    marginLeft:15,
  },
  sourceImg:{
    marginLeft:15,
  },
  searchView:{
    marginTop:10,
    flexDirection:'row',
    height:45,
    alignItems:'center',
  },
  textInputView:{
    marginLeft: 13,
    flex: 1,
    height:40,
    marginRight:13,
  },
  scanImg:{
    marginLeft:13,
  }
}

class Search extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
        <View style={styles.searchView}>
          <Image style={styles.inputImg} source={imageSource.home.input}>
            <TouchableOpacity>
              <Image style={styles.sourceImg} source={imageSource.home.search}>
              </Image>
            </TouchableOpacity>
            <TextInput
              style={styles.textInputView}
              underlineColorAndroid="transparent"
              placeholder={this.props.placeholderText}
              keyboardType="numeric"
              placeholderTextColor={colors.inputColor}
              value={this.props.value}
              onChangeText={(text) => {this.props.onSearchChange(text);}}
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
}

export default Search;