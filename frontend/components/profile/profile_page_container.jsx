import { connect } from 'react-redux';
import { fetchUser, fetchProfile } from '../../redux/actions/user';
import { fetchRelationshipStatuses } from '../../redux/actions/relationship_status';
import ProfilePage from './profile_page';

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
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRelationshipStatuses: () => dispatch(fetchRelationshipStatuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)