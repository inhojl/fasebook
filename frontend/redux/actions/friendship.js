import * as FriendshipAPIUtil from '../../util/api/friendship';
import { RECEIVE_USERS } from './user';


const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const fetchFriends = (userId) => (dispatch) => (
  FriendshipAPIUtil.fetchFriends(userId)
    .then((friends) => dispatch(receiveUsers(friends)))
)
