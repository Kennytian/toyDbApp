import React from 'react';
import { TouchableOpacity } from 'react-native';
import ImageCard from './../components/cards/imageCard';

const styles = {
  container: {
    marginTop: 10
  }
};

const SpecialListItem = (item, navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SpecialDetail')}>
      <ImageCard style={styles.container} text={item.text} source={item.source}/>
    </TouchableOpacity>
  );
};

export default SpecialListItem;
