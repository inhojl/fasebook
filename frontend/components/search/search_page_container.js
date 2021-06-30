import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../redux/actions/user'
import { createFriendRequest, updateFriendRequest, deleteFriendRequest } from '../../redux/actions/friendship';
import SearchPage from './search_page'

const mapStateToProps = (state) => ({
  profiles: state.entities.profiles,
  users: state.entities.users,
  searchResults: state.entities.search,
  currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (query) => dispatch(fetchUsers(query)),  
  createFriendRequest: (userId) => dispatch(createFriendRequest(userId)),
  updateFriendRequest: (userId) => dispatch(updateFriendRequest(userId)),
  deleteFriendRequest: (userId) => dispatch(deleteFriendRequest(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

