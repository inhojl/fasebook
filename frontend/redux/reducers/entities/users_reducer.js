import {
  RECEIVE_USER,
  RECEIVE_CURRENT_USER,
  RECEIVE_USERS
} from '../../actions/user'




const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: return { ...state, [action.currentUser.user.id]: action.currentUser.user };
    case RECEIVE_USER: return { ...state, [action.user.user.id ]: action.user.user}
    case RECEIVE_USERS: return { ...state, ...action.users }
    default: return state;
  }
}

export default userReducer;