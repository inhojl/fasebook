import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, fetchProfile } from '../../redux/actions/user';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  currentProfile: state.entities.profiles[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

