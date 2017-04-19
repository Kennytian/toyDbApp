//import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';

import { user }  from './user';
import { star }  from './star';
import { nav } from './nav';

const rootReducer = combineReducers({
  nav,
  user,
  star
});

export default rootReducer;
