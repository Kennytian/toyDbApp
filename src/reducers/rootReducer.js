import { combineReducers } from 'redux-immutable';
import { user }  from './user';
import { star }  from './star';

const rootReducer = combineReducers({
  user,
  star
});

export default rootReducer;
