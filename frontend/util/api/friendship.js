
export const createFriendRequest = (friendship) => (
  $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { friendship }
  })
)

export const updateFriendRequest = (friendship) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships`,
    data: { friendship }
  })
)

export const deleteFriendRequest = (friendship) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships`,
    data: { friendship }
  })
)

export const fetchFriends = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`
  })
)

export const fetchFriendRequesters = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friend_requests`
  })
)

