import React from 'react';
import ImageCard from './../components/cards/imageCard';

const styles = {
  container: {
    marginTop: 10
  }
};

const SpecialListItem = ({item}) => {
  return (
    <ImageCard style={styles.container} text={item.text} source={item.source}/>
  );
};

export default SpecialListItem;
