import { connect } from 'react-redux';
import ProfileAbout from './profile_about';
import { fetchProfile, updateProfile, fetchUser, updateUser } from '../../redux/actions/user'
import { fetchRelationshipStatuses } from '../../redux/actions/relationship_status'

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]
  return {
    user: user,
    profile: state.entities.profiles[user.profileId],
    currentUserId: state.session.id,
    relationshipStatuses: state.entities.relationshipStatuses
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (profileId) => dispatch(fetchProfile(profileId)),
  updateProfile: (profile) => dispatch(updateProfile(profile)),
  updateUser: (user) => dispatch(updateUser(user)),
  fetchRelationshipStatuses: () => dispatch(fetchRelationshipStatuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);
