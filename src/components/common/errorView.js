import React  from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const errorView = () => {
  return (
    <View style={styles.container}>
      <Text>
        Fail: {this.props.text}
      </Text>
    </View>
  );
};

export default errorView;