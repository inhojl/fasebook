import { connect } from 'react-redux';
import { fetchUser, fetchProfile, updateProfile } from '../../redux/actions/user';
import { fetchRelationshipStatuses } from '../../redux/actions/relationship_status';
import { isLoading, isLoaded } from '../../redux/actions/ui';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]
  return {
    user: user,
    profile: state.entities.profiles[user.profileId],
    currentUserId: state.session.id,
    relationshipStatuses: state.entities.relationshipStatuses,
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRelationshipStatuses: () => dispatch(fetchRelationshipStatuses()),
  updateProfile: (profile) => dispatch(updateProfile(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)