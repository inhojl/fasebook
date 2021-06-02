import { connect } from 'react-redux';
import HomePage from './home_page';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
})

export default connect(mapStateToProps)(HomePage);

