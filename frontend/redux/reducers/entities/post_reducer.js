import {
  RECEIVE_POSTS
} from '../../actions/post';
import {
  RECEIVE_COMMENT
} from '../../actions/comment';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS: return { ...state, ...action.posts.posts }
    case RECEIVE_COMMENT: return { ...state, [action.comment.post.id]: action.comment.post }
    default: return state;
  }
}