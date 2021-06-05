import {
  RECEIVE_CURRENT_USER
} from '../../actions/user'


const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: return { ...state, [action.currentUser.user.id]: action.currentUser.user }
    default: return state;
  }
}

export default userReducer;