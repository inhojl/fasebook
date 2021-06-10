import { connect } from 'react-redux';
import { fetchFriendRequesters, createFriendRequest, updateFriendRequest, deleteFriendRequest } from '../../redux/actions/friendship';
import FriendsPage from './friends_page';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.id,
    users: state.entities.users,
    profiles: state.entities.profiles
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchFriendRequesters: (userId) => dispatch(fetchFriendRequesters(userId)),
  createFriendRequest: (userId) => dispatch(createFriendRequest(userId)),
  updateFriendRequest: (userId) => dispatch(updateFriendRequest(userId)),
  deleteFriendRequest: (userId) => dispatch(deleteFriendRequest(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
