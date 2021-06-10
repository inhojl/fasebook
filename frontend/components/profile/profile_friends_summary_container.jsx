
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchFriends } from '../../redux/actions/friendship';
import ProfileFriendsSummary from './profile_friends_summary';

const mapStateToProps = (state, ownProps) => {
  

  
  return {
    users: state.entities.users,
    profiles: state.entities.profiles,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: (userId) => dispatch(fetchFriends(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileFriendsSummary))

