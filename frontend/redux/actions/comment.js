import * as CommentAPIUtil from '../../util/api/comment';
import { receivePost } from './post';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
})

export const fetchComments = (postId) => (dispatch) => (
  CommentAPIUtil.fetchComments(postId)
    .then((comments) => dispatch(receiveComments(comments)))
)

export const fetchComment = (commentId) => (dispatch) => (
  CommentAPIUtil.fetchComment(commentId)
    .then((comment) => dispatch(receiveComment(comment)))
)

export const createComment = (comment) => (dispatch) => (
  CommentAPIUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
)
export const updateComment = (comment) => (dispatch) => (
  CommentAPIUtil.updateComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
)
export const deleteComment = (commentId) => (dispatch) => (
  CommentAPIUtil.deleteComment(commentId)
    .then((post) => dispatch(receivePost(post)))
)