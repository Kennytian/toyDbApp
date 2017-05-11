import React, { Component } from 'react';
import { Image } from 'react-native';

class AutoSizeImage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static propTyps = {
    width: React.PropTypes.number.isRequired
  };

  render() {
    let {height} = this.state, {style} = this.props;
    if (height) {
      style = [style, {height: height}];
    }


    return <Image {...this.props} style={style} resizeMode="contain" onLoad={this._onLoaded.bind(this)}/>;
  }

  _onLoaded(evt) {
    let width = evt.nativeEvent.source.width,
      height = evt.nativeEvent.source.height;
    this.setState({height: this.props.width * height / width});
  }
}

export default AutoSizeImage;