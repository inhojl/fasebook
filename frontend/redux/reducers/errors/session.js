import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RESET_SESSION_ERRORS
} from '../../actions/session';

const INITIAL_STATE = {
  email: [],
  password: []
}

const sessionErrorsReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: return action.errors;
    case RESET_SESSION_ERRORS:
    case RECEIVE_CURRENT_USER: return INITIAL_STATE;
    default: return state;
  }
}

export default sessionErrorsReducer;