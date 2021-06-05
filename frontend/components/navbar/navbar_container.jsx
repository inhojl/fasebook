import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../redux/actions/user';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

