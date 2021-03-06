import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

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

  const onConfirm = (e) => {
    e.preventDefault();
    updateFriendRequest({ user_id: currentUserId, friend_id: friendRequesterId })
      .then(setShowConfirm(true))
  }

  const onDelete = (e) => {
    e.preventDefault();
    deleteFriendRequest({ user_id: currentUserId, friend_id: friendRequesterId })
      .then(setShowDelete(true))
  }

  const friendRequester = users[friendRequesterId]
  const profile = profiles[friendRequester.profileId]
  let message = ''
  if (friendRequester.friendshipStatus === "FRIENDS") {
    message = 'Request approved'
  } else if (!friendRequester.friendshipStatus) {
    message = 'Request removed'
  }

  return (
    <div className='friends-sidebar-item'>
      {
        profile.profilePicUrl ?
        <div
          style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
          className='friends-sidebar-item__profile-image'
        ></div>
        : <div className='friends-sidebar-item__no-img'><FontAwesomeIcon icon={faUser}/></div>
      }
      <div className='friends-sidebar-item__container'>
        <h3 className='friends-sidebar-item__name'>{friendRequester.firstName} {friendRequester.lastName}</h3>
        {
          message ?
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
