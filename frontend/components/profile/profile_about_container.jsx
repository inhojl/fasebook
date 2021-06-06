import { connect } from 'react-redux';
import ProfileAbout from './profile_about';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  profile: state.entities.profiles[ownProps.match.params.userId],
  currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);
