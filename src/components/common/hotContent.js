import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import Colors from './../../constants/colors';
import ImageSource from './../../constants/imageSource';

const styles = {
  hotContent: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  hotImg: {
    width: 103,
    height: 60
  },
  HotView: {
    flex: 1,
    marginLeft: 20,
    height: 60
  },
  hotText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20
  },
  praise: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center'
  }
};

class hotContent extends Component {
  render() {
    return (
      <View style={styles.hotContent}>
        <Image source={this.props.HotImg} style={styles.hotImg}/>
        <View style={styles.HotView}>
          <Text style={styles.hotText}>{this.props.hotText}</Text>
          <View style={styles.praise}>
            <Text>{this.props.releaseTime}</Text>
            <Text style={{marginLeft: 10}}>{this.props.Time}</Text>
            <TouchableOpacity hitSlop={{top: 8, left: 8, right: 8, bottom: 8}} style={{marginLeft: 30}} onPress={this.props.onPrasie}>
              <Image source={ImageSource.home.praise}/>
            </TouchableOpacity>
            <Text style={{marginLeft: 5}}>{this.props.number}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default hotContent;
