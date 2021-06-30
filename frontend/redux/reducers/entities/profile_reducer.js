import {
  RECEIVE_PROFILE,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_SEARCH
} from '../../actions/user'
import {
  RECEIVE_POSTS
} from '../../actions/post'

const receiveProfile = (state, profile) => ({
  ...state,
  [profile.id]: profile
})


const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE: return receiveProfile(state, action.profile);
    case RECEIVE_CURRENT_USER: return receiveProfile(state, action.currentUser.profile);
    case RECEIVE_USER: return receiveProfile(state, action.user.profile);
    case RECEIVE_USERS:
    case RECEIVE_SEARCH:
       return { ...state, ...action.users.profiles }
    case RECEIVE_POSTS: return { ...state, ...action.posts.profiles }
    default: return state;
  }
}

export default profileReducer;

