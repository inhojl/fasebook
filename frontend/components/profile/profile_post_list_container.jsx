import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../redux/actions/post';
import { createComment, updateComment, deleteComment } from '../../redux/actions/comment';
import PostList from '../shared/post_list';

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.userId];
  const wallPosts = user && user.wallPostIds ? user.wallPostIds.map((wallPostId) => state.entities.posts[wallPostId]) : []
  const currentUser = state.entities.users[state.session.id];


  return ({
    comments: state.entities.comments,
    users: state.entities.users,
    profiles: state.entities.profiles,
    user,
    currentUser,
    wallPosts,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
