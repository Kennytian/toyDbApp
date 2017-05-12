import React, { Component } from 'react';
import { View, LayoutAnimation, ScrollView } from 'react-native';
import TabBar from '../../../components/common/tabBar';
import Support from './support';
import Review from './review';

class PageComponent extends Component {
  constructor() {
    super();
    this.state = {
      tabActiveIndex: 0
    };
  }

  render() {
    let tabs = [
      {key: 'review', label: '评论', onPress: this.onChangeTab.bind(this)},
      {key: 'support', label: '点赞', onPress: this.onChangeTab.bind(this)}
    ];
    let {tabActiveIndex} = this.state;
    let contentNode = <Review {...this.props}/>;
    if (tabActiveIndex === 1) {
      contentNode = <Support {...this.props}/>;
    }

    return (
      <ScrollView>
        <TabBar tabs={tabs} active={this.state.tabActiveIndex}/>
        {contentNode}
      </ScrollView>
    );
  }

  onChangeTab(index) {
    console.log(index);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({tabActiveIndex: index});
  }
}

export default PageComponent;