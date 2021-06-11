import {
  RECEIVE_POSTS
} from '../../actions/post';

import {
  RECEIVE_COMMENT
} from '../../actions/comment';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS: return { ...state, ...action.posts.comments }
    case RECEIVE_COMMENT: return { ...state, [action.comment.comment.id]: action.comment.comment}
    default: return state;
  }
}