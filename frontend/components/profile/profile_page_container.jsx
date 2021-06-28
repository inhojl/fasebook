import { connect } from 'react-redux';
import { fetchUser, fetchProfile, updateProfile, updateProfileFormData } from '../../redux/actions/user';
import { fetchFriends,createFriendRequest, updateFriendRequest, deleteFriendRequest } from '../../redux/actions/friendship';
import { fetchRelationshipStatuses } from '../../redux/actions/relationship_status';
import { 
  createPost,
  updatePost,
  deletePost
 } from '../../redux/actions/post';
import ProfilePage from './profile_page';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId]
  console.log('container', ownProps.match.params.userId, state.entities.users)
  return {
    user: user,
    profile: user ? state.entities.profiles[user.profileId] : null,
    currentUserId: state.session.id,
    relationshipStatuses: state.entities.relationshipStatuses,
    users: state.entities.users,
    profiles: state.entities.profiles
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchRelationshipStatuses: () => dispatch(fetchRelationshipStatuses()),
  updateProfile: (profile) => dispatch(updateProfile(profile)),
  updateProfileFormData: (profileId, formData) => dispatch(updateProfileFormData(profileId, formData)),
  fetchFriends: (userId) => dispatch(fetchFriends(userId)),
  createFriendRequest: (userId) => dispatch(createFriendRequest(userId)),
  updateFriendRequest: (userId) => dispatch(updateFriendRequest(userId)),
  deleteFriendRequest: (userId) => dispatch(deleteFriendRequest(userId)),
  createPost: (post) => dispatch(createPost(post)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)


// createFriendRequest
// updateFriendRequest
// deleteFriendRequest