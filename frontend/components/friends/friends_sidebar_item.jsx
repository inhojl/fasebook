import React, { useState } from 'react';


const FriendsSidebarItem = ({
  currentUserId,
  friendRequesterId,
  users,
  profiles,
  fetchFriendRequesters,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest
}) => {

  const [showConfirm, setShowConfirm] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const onConfirm = () => {
    updateFriendRequest({ user_id: currentUserId, friend_id: friendRequesterId })
      .then(setShowConfirm(true))
  }

  const onDelete = () => {
    deleteFriendRequest({ user_id: currentUserId, friend_id: friendRequesterId })
      .then(setShowDelete(true))
  }

  const friendRequester = users[friendRequesterId]
  const profile = profiles[friendRequester.profileId]
  let message = ''
  if (showConfirm) {
    message = 'Request approved'
  } else if (showDelete) {
    message = 'Request removed'
  }

  return (
    <div className='friends-sidebar-item'>
      <div
        style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
        className='friends-sidebar-item__profile-image'
      ></div>
      <div className='friends-sidebar-item__container'>
        <h3 className='friends-sidebar-item__name'>{friendRequester.firstName} {friendRequester.lastName}</h3>
        {
          showConfirm || showDelete ?
            (
              <p className='friends-sidebar-item__message'>{message}</p>
            ) : (
              <div className='friends-sidebar-item__button-group'>
                <button 
                  className='friends-sidebar-item__confirm'
                  onClick={onConfirm}>
                  Confirm
                </button>
                <button 
                  className='friends-sidebar-item__delete'
                  onClick={onDelete}>
                  Delete
                </button>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default FriendsSidebarItem;
