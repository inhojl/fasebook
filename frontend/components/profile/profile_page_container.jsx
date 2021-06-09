import { connect } from 'react-redux';
import { fetchUser, fetchProfile, updateProfile, updateProfileFormData } from '../../redux/actions/user';
import { fetchRelationshipStatuses } from '../../redux/actions/relationship_status';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]
  return {
    user: user,
    profile: user ? state.entities.profiles[user.profileId] : null,
    currentUserId: state.session.id,
    relationshipStatuses: state.entities.relationshipStatuses,
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRelationshipStatuses: () => dispatch(fetchRelationshipStatuses()),
  updateProfile: (profile) => dispatch(updateProfile(profile)),
  updateProfileFormData: (profileId, formData) => dispatch(updateProfileFormData(profileId, formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)