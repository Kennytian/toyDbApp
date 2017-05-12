import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';

class AutoSizeImage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static propTyps = {
    width: PropTypes.number.isRequired
  };

  render() {
    let {height} = this.state, {style} = this.props;
    if (height) {
      style = [style, {height: height}];
    }

    return <Image {...this.props} style={style} resizeMode="contain" onLoad={this._onLoaded.bind(this)}/>;
  }

  _onLoaded(evt) {
    let {width, height} = evt.nativeEvent.source;
    this.setState({height: this.props.width * height / width});
  }
}

export default AutoSizeImage;