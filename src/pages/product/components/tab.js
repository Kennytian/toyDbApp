import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BORDER_WIDTH } from '../../../constants/global';
import colors from '../../../constants/colors';
let borderRadius = 15;

let tabStyles = {
  box: {
    backgroundColor: 'white',
    borderWidth: BORDER_WIDTH,
    borderColor: '#b5b5b5',
    margin: 10,
    borderRadius: borderRadius,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: borderRadius
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    color: colors.gray6,
    borderRadius: borderRadius,
    height: 28,
    paddingTop: 5
  },
  active: {
    backgroundColor: '#91b8f8',
    color: 'white'
  }
};

class Tab extends Component {

  static propTypes = {
    onChangeTab: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={tabStyles.box}>
        <TouchableOpacity style={tabStyles.item} onPress={() => this._navTo('detail')}>
          <Text style={this.getActiveStyle('detail')}>玩具简介</Text></TouchableOpacity>
        <TouchableOpacity style={tabStyles.item} onPress={() => this._navTo('exponent')}>
          <Text style={this.getActiveStyle('exponent')}>顽童指数</Text></TouchableOpacity>
        <TouchableOpacity style={tabStyles.item} onPress={() => this._navTo('grade')}>
          <Text style={this.getActiveStyle('grade')}>用户评分</Text></TouchableOpacity>
        <TouchableOpacity style={tabStyles.item} onPress={() => this._navTo('recommend')}>
          <Text style={this.getActiveStyle('recommend')}>相关推荐</Text></TouchableOpacity>
      </View>
    );
  }

  getActiveStyle(tab) {
    return [tabStyles.text, tab === this.props.active ? tabStyles.active : null];
  }

  _navTo(name) {
    this.props.onChangeTab(name);
  }
}

export default Tab;