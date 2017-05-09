import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import Colors from './../../constants/colors';
import ImageSource from './../../constants/imageSource';

const styles = {
  hotContent: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  hotImg: {
    width: 103,
    height: 60,
    borderRadius: 6
  },
  HotInfoView: {
    paddingLeft: 20,
    paddingRight: 103
  },
  hotText: {
    flex: 1,
    fontSize: 16
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
        <View style={styles.HotInfoView}>
          <Text style={styles.hotText} ellipsizeMode={'tail'} numberOfLines={2}>{this.props.hotText}</Text>
          <View style={styles.praise}>
            <Text style={{color: Colors.gray9}}>{this.props.releaseTime}</Text>
            <Text style={{marginLeft: 10, color: Colors.gray9}}>{this.props.Time}</Text>
            <TouchableOpacity hitSlop={{top: 8, left: 8, right: 8, bottom: 8}} style={{marginLeft: 30}}
                              onPress={this.props.onPrasie}>
              <Image source={ImageSource.home.praise}/>
            </TouchableOpacity>
            <Text style={{marginLeft: 5, color: Colors.gray9}}>{this.props.number}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default hotContent;
