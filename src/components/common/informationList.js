import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from 'react-native';

import imageSource from './../../constants/imageSource';
import Colors from './../../constants/colors';

const styles = {
  public: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderBottom
  },
  mypic: {
    marginLeft: 11
  },
  mytext: {
    marginLeft: 13,
    flex: 1
  },
  arrows: {
    marginRight: 15
  }
};


class InformationList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.public, styles.borderBottom]} onPress={this.props.press}>
          <Image source={this.props.icon} style={styles.mypic}/>
          <Text style={styles.mytext}>{this.props.text}</Text>
          <Image source={this.props.rightBtn} style={styles.arrows}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InformationList;