//import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { user }  from './user';
import { star }  from './star';

import RootNavigator from '../routers/rootRouter';

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
