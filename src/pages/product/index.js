import React, { Component } from 'react';
import { ScrollView, LayoutAnimation } from 'react-native';
import Header from './components/header';
import Tab from './components/tab';
import styles from './components/style';
import Detail from './detail';
import Exponent from './exponent';
import Grade from './grade';
import Recommend from './recommend';

class ProductDetail extends Component {
  static navigationOptions = {
    title: '乐高积木玩具'
  };

  constructor() {
    super();
    this.state = {
      tab: 'detail'
    };
  }

  render() {
    var contentNode;
    switch (this.state.tab) {
      case 'detail':
        contentNode = <Detail/>;
        break;
      case 'exponent':
        contentNode = <Exponent/>;
        break;
      case 'grade':
        contentNode = <Grade/>;
        break;
      case 'recommend':
        contentNode = <Recommend/>;
        break;
    }
    return (
      <ScrollView style={styles.container}>
        <Header/>
        <Tab active={this.state.tab} onChangeTab={this._onChangeTab.bind(this)}/>
        {contentNode}
      </ScrollView>
    );
  }

  _onChangeTab(tab) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({tab});

  }
}

export default ProductDetail;