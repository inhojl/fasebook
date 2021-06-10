import * as FriendshipAPIUtil from '../../util/api/friendship';
import { RECEIVE_USERS, RECEIVE_USER } from './user';


const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})


export const fetchFriends = (userId) => (dispatch) => (
  FriendshipAPIUtil.fetchFriends(userId)
    .then((users) => dispatch(receiveUsers(users)))
)

export const createFriendRequest = (userId) => (dispatch) => (
  FriendshipAPIUtil.createFriendRequest(userId)
    .then((user) => {
      console.log('here',user)
      dispatch(receiveUser(user))
    })
)


export const updateFriendRequest = (userId) => (dispatch) => (
  FriendshipAPIUtil.updateFriendRequest(userId)
    .then((user) => dispatch(receiveUser(user)))
)


export const deleteFriendRequest = (userId) => (dispatch) => (
  FriendshipAPIUtil.deleteFriendRequest(userId)
    .then((user) => dispatch(receiveUser(user)))
)




// createFriendRequest
// updateFriendRequest
// deleteFriendRequest