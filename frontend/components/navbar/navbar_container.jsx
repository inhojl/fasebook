import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, fetchProfile, fetchUser, fetchUsers } from '../../redux/actions/user';
import { createPost, fetchNewsfeed } from '../../redux/actions/post';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  currentProfile: state.entities.profiles[state.session.id],
  profiles: state.entities.profiles,
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
  createPost: (post) => dispatch(createPost(post)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchNewsfeed: (userId) => dispatch(fetchNewsfeed(userId)),
  fetchUsers: (query) => dispatch(fetchUsers(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

