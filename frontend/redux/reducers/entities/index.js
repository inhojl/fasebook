import { combineReducers } from 'redux';
import users from './users_reducer';
import profiles from './profile_reducer';
import relationshipStatuses from './relationship_statuses_reducer';


export default combineReducers({
  users,
  profiles,
  relationshipStatuses
})