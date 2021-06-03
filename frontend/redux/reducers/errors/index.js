import { combineReducers } from 'redux';
import session from './session';
import signup from './signup'

export default combineReducers({
  session,
  signup
})