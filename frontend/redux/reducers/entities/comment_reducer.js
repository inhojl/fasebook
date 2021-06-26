import {
  RECEIVE_POSTS
} from '../../actions/post';

import {
  RECEIVE_COMMENT
} from '../../actions/comment';

export default (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_POSTS: return { ...state, ...action.posts.comments }
    case RECEIVE_COMMENT: 
      const parentComment = action.comment.parentComment
      return !parentComment ? { 
        ...state, 
        [action.comment.comment.id]: action.comment.comment
      } : {
        ...state,
        [action.comment.comment.id]: action.comment.comment,
        [parentComment.id]: parentComment
      }
    default: return state;
  }
}