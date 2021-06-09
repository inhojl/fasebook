
export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
)

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  })
)


// PROFILES

export const fetchProfile = (profileId) => (
  $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}`
  })
)

export const updateProfile = (profile) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${profile.id}`,
    data: { profile }
  })
)


export const updateProfileFormData = (profileId, formData) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${profileId}`,
    data: formData,
    contentType: false,
    processData: false
  })
)