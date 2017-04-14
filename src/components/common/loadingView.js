import React  from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './styles';

const loadingView = (isFirst) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        style={[styles.gray, {height: 80}]}
        color='red'
        size="large"
      />
    </View>
  );
};

export default loadingView;