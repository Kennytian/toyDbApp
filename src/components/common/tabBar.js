import React, { Component }  from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class TabBar extends Component {

  static propsTypes = {
    tabs: React.PropTypes.array.isRequired,
    activeIndex: React.PropTypes.number
  };

  render() {
    var {tabs, activeIndex = 0} = this.props;
    return (
      <View style={styles.tabBar.container}>
        <View style={styles.tabBar.innerWrapper}>
          {
            tabs.map(function (item, index) {
              return (
                <View key={item.key} style={styles.tabBar.item}>
                  {index !== 0 ? <View style={styles.tabBar.splitLine}/> : null}
                  <TouchableOpacity onPress={item.onPress.bind(null, index)} style={styles.tabBar.itemTouch}>
                    <Text style={[styles.tabBar.button, activeIndex === index && styles.tabBar.selected]}>
                      <Text style={styles.tabBar.label}>{item.label}</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}

export default TabBar;