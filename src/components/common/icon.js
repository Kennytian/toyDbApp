import React from 'react';
import { Image } from 'react-native';

const Icon = ({source, style = {}, height, width}) => {
  if (width) {
    style.width = width;
  }
  if (height) {
    style.height = height;
  }
  return <Image source={source} style={style}/>;
};

export default Icon;
