import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import PageConfigs from './pageConfigs';

class RootRouter extends Component {
  render() {
    __DEV__ && console.debug('RootRouter this.props.nav:', this.props.nav);
    return (
      <PageConfigs
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

export default connect(state => ({nav: state.nav}))(RootRouter);
