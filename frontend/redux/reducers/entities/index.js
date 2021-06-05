import { combineReducers } from 'redux';
import users from './users_reducer';
import profiles from './profile_reducer';


export default combineReducers({
  users,
  profiles
})