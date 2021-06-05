import {
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_CURRENT_USER,
  RESET_SIGNUP_ERRORS
} from '../../actions/user';


const INITIAL_STATE = {
  firstName: [],
  lastName: [],
  email: [],
  password: [],
  birthdate: [],
  genderId: []
}

const signupErrorsReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS: return action.errors;
    case RESET_SIGNUP_ERRORS:
    case RECEIVE_CURRENT_USER: return INITIAL_STATE;
    default: return state;
  }
}

export default signupErrorsReducer;