import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/user';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  profile: state.entities.profiles[ownProps.match.params.userId],
  currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)