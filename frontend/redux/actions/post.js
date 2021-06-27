import * as PostAPIUtil from '../../util/api/post';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
})


export const fetchPosts = (wallId) => (dispatch) => (
  PostAPIUtil.fetchPosts(wallId)
    .then((posts) => dispatch(receivePosts(posts)))
)

export const fetchPost = (postId) => (dispatch) => (
  PostAPIUtil.fetchPost(postId)
    .then((post) => dispatch(receivePost(post)))
)

export const createPost = (post) => (dispatch) => (
  PostAPIUtil.createPost(post)
    .then((post) => dispatch(receivePost(post)))
)
export const updatePost = (post) => (dispatch) => (
  PostAPIUtil.updatePost(post)
    .then((post) => dispatch(receivePost(post)))
)
export const deletePost = (postId) => (dispatch) => (
  PostAPIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)

export const fetchNewsfeed = (userId) => (dispatch) => (
  PostAPIUtil.fetchNewsfeed(userId)
    .then(posts => dispatch(receivePosts(posts)))
)