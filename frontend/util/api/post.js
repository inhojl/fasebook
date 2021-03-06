export const fetchPost = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
)


export const fetchPosts = (wallId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${wallId}/posts`
  })
)

export const createPost = (post) => (
  $.ajax({
    method: 'POST',
    url: `/api/posts`,
    data: { post }
  })
)

export const updatePost = (post) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  })
)


export const deletePost = (postId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
)


export const fetchNewsfeed = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/newsfeed`
  })
)

export const createLike = (like) => (
  $.ajax({
    method: 'POST',
    url: `/api/likes`,
    data: { like }
  })

)

export const deleteLike = (like) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes`,
    data: { like }
  })
)