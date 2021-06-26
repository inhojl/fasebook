import {
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../../actions/post';
import {
  RECEIVE_COMMENT
} from '../../actions/comment';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS: return { ...state, ...action.posts.posts }
    case RECEIVE_POST: return { ...state, [action.post.id]: action.post }
    case RECEIVE_COMMENT: return { ...state, [action.comment.post.id]: action.comment.post }
    default: return state;
  }
}