import { fromJS } from 'immutable';

import RootNavigator from '../routers/pageConfigs';

const initialState = fromJS({
  index: 0,
  routes: [{
    routeName: 'init',
    key: 'init'
  }]
});

export const nav = (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};

