import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
})

export default connect(mapStateToProps)(Navbar);

