import {
  RECEIVE_USER,
  RECEIVE_CURRENT_USER
} from '../../actions/user'


const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: return { ...state, [action.currentUser.user.id]: action.currentUser.user };
    case RECEIVE_USER: return { ...state, [action.user.user.id]: action.user.user };
    default: return state;
  }
}

export default userReducer;