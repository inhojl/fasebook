import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../redux/actions/post';
import { createComment, updateComment, deleteComment } from '../../redux/actions/comment';
import { updatePost, deletePost, fetchNewsfeed } from '../../redux/actions/post';
import { fetchUser } from '../../redux/actions/user';
import { createLike, deleteLike } from '../../redux/actions/like';
import PostList from '../shared/post_list';

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.userId];
  const currentUser = state.entities.users[state.session.id];
  const newsfeedPosts = currentUser && currentUser.newsfeedPostIds ? currentUser.newsfeedPostIds.map((newsfeedPostId) => state.entities.posts[newsfeedPostId]) : []


  return ({
    comments: state.entities.comments,
    users: state.entities.users,
    profiles: state.entities.profiles,
    user,
    currentUser,
    newsfeedPosts,
    newsfeed: true
  })
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (post) => dispatch(deletePost(post)),
  fetchNewsfeed: (userId) => dispatch(fetchNewsfeed(userId)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
