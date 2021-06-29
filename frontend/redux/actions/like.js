import * as LikeAPIUtil from '../../util/api/like';


export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

export const createLike = (like) => (dispatch) => (
  LikeAPIUtil.createLike(like)
    .then(
      like.likeable_type === "Post" ? 
      (post) => dispatch(receivePost(post))
      : (comment) => dispatch(receiveComment(comment))
    )
)

export const deleteLike = (like) => (dispatch) => (
  LikeAPIUtil.deleteLike(like)
    .then(
      like.likeable_type === "Post" ? 
        (post) => dispatch(receivePost(post))
        : (comment) => dispatch(receiveComment(comment))
    )
)