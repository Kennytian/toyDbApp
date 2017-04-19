//import { combineReducers } from 'redux-immutable';

import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { user }  from './user';
import { star }  from './star';

import RootNavigator from '../routers/pageConfigs';

const initialState = fromJS({
  index: 0,
  routes: [{
    routeName: 'init',
    key: 'init'
  }]
});

const navReducer = (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const rootReducer = combineReducers({
  navReducer,
  user,
  star
});

export default rootReducer;
