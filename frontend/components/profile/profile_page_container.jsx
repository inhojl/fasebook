import { connect } from 'react-redux';
import { fetchUser, fetchProfile } from '../../redux/actions/user';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]
  return {
    user: user,
    profile: state.entities.profiles[user.profileId],
    currentUserId: state.session.id
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)