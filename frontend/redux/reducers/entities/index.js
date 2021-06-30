import { combineReducers } from 'redux';
import users from './users_reducer';
import profiles from './profile_reducer';
import comments from './comment_reducer';
import posts from './post_reducer';
import relationshipStatuses from './relationship_statuses_reducer';
import search from './search_reducer';


export default combineReducers({
  users,
  profiles,
  relationshipStatuses,
  comments,
  posts,
  search
})