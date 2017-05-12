import React, { Component } from 'react';
import { Alert, BackHandler } from 'react-native';

import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import PageConfigs from './pageConfigs';

class RootRouter extends Component {
  render() {
    return (
      <PageConfigs
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      this._showExitConfirm();
      // return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  _showExitConfirm() {
    Alert.alert('', '您确定要退出吗？', [{
      text: '退出',
      onPress: () => {
        BackHandler.exitApp();
      }
    }, {
      text: '取消',
      onPress: () => true
    }]);
  }
}

export default connect(state => ({nav: state.nav}))(RootRouter);
