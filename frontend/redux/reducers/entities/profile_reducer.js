import {
  RECEIVE_CURRENT_USER
} from '../../actions/user'

const receiveCurrentUser = (state, { currentUser: { profile } }) => ({
  ...state,
  [profile.userId]: profile
})

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: return receiveCurrentUser(state, action);
    default: return state;
  }
}

export default profileReducer;

