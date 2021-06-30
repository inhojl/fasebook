import * as SessionAPIUtil from '../../util/api/session';
import * as UserAPIUtil from '../../util/api/user';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';
export const RESET_SIGNUP_ERRORS = 'RESET_SIGNUP_ERRORS';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_SEARCH,
  users
})


export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
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



// SESSION

export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSignupErrors(error.responseJSON)))
);


export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()))
);

// USER

export const fetchUser = (userId) => (dispatch) => (
  UserAPIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);

export const fetchUsers = (query) => (dispatch) => (
  UserAPIUtil.fetchUsers(query)
    .then((users) => {
      dispatch(receiveUsers(users))
    })
)

export const updateUser = (user) => (dispatch) => (
  UserAPIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
    .fail((error) => dispatch(receiveSignupErrors(error.responseJSON)))
);

// PROFILE

export const fetchProfile = (profileId) => (dispatch) => (
  UserAPIUtil.fetchProfile(profileId)
    .then((profile) => dispatch(receiveProfile(profile)))
);

export const updateProfile = (profile) => (dispatch) => (
  UserAPIUtil.updateProfile(profile)
    .then((profile) => dispatch(receiveProfile(profile)))
);


export const updateProfileFormData = (profileId, formData) => (dispatch) => (
  UserAPIUtil.updateProfileFormData(profileId, formData)
    .then((profile) => dispatch(receiveProfile(profile)))
);