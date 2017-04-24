import React  from 'react';
import { Image, View, TextInput } from 'react-native';

import styles from './styles';
import imageSource from '../../constants/imageSource';

const searchBar = (props) => {
  if (!props) {
    return null;
  }
  return (
    <View style={styles.searchBar.wrapper}>
      <Image style={styles.searchBar.magnifier} source={imageSource.home.search}/>
      <TextInput
        style={styles.searchBar.input}
        maxLength={100}
        clearButtonMode='while-editing'
        underlineColorAndroid="transparent"
        placeholder={props.placeholderText}
        placeholderTextColor={styles.searchBar.placeholderTextColor}
        value={props.value}
        onChangeText={(text) => {
          props.onChangeText(text);
        }}
      />
    </View>
  );
};

export default searchBar;