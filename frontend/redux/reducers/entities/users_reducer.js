import {
  RECEIVE_USER,
  RECEIVE_CURRENT_USER,
  RECEIVE_USERS
} from '../../actions/user'
import {
  RECEIVE_POSTS
} from '../../actions/post'

const receivePosts = (state, action) => {


  return { ...state, ...action.posts.users };
}

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: return { ...state, [action.currentUser.user.id]: action.currentUser.user };
    case RECEIVE_USER: return { ...state, [action.user.user.id ]: action.user.user}
    case RECEIVE_USERS: 
    return { ...state, ...action.users.users }
    case RECEIVE_POSTS: return receivePosts(state, action)
    default: return state;
  }
}

export default userReducer;