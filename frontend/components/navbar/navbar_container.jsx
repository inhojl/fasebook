import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../redux/actions/session';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

