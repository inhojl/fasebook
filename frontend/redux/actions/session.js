import * as APIUtil from '../../util/api/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSignupErrors(error.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()))
);