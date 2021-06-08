import {
  RECEIVE_PROFILE,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER
} from '../../actions/user'

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
    default: return state;
  }
}

export default profileReducer;

