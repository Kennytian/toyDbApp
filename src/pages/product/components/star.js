import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';
import imageSource from '../../../constants/imageSource';
import  pageStyles from './style';

class Star extends Component {
  static propTypes = {
    grade: PropTypes.number.isRequired
  };

  render() {
    let node = [], {grade} = this.props;
    for (var i = 1; i <= 5; i++) {
      var source = i > grade ? imageSource.product.starGray : imageSource.product.star;
      node.push(<Image source={source} key={i} style={pageStyles.grade.starImage}/>);
    }
    return (
      <View style={pageStyles.grade.starList}>{node}</View>
    );
  }
}

export default Star;