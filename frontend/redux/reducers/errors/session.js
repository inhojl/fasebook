import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../../actions/session';

const INITIAL_STATE = {
  email: [],
  password: []
}

const sessionErrorsReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: return action.errors;
    case RECEIVE_CURRENT_USER: return {};
    default: return state;
  }
}

export default sessionErrorsReducer;