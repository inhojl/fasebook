import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUserPlus, faUserMinus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import OutsideClickNotifier from '../shared/outside_click_notifier';

const FriendButton = ({
  users,
  user,
  currentUserId,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest,
  fetchUser
}) => {

  const [showFriendOptions, setShowFriendOptions] = useState(false);

  let currentStyle = '';


  let FriendButton = () => null;
  if (user && user.id != currentUserId) {
    let label = ''
    let icon;
    let style;
    let onFriendClick = () => { }
    if (user.friendshipStatus === 'PENDING_SENT') {
      label = 'Cancel Request'
      icon = faUserTimes
      style = '--sent'
      onFriendClick = () => deleteFriendRequest({ user_id: currentUserId, friend_id: user.id })
        .then(() => fetchUser(user.id))
    } else if (user.friendshipStatus === 'PENDING_RECEIVED') {
      label = 'Respond'
      icon = faUserCheck
      style = '--received'
      onFriendClick = () => setShowFriendOptions(true)

    } else if (user.friendshipStatus === 'FRIENDS') {
      label = 'Friends'
      icon = faUserCheck
      style = '--friends'
      onFriendClick = () => setShowFriendOptions(true)

    }
    else {
      label = 'Add Friend'
      icon = faUserPlus
      style = '--add'
      onFriendClick = () => createFriendRequest({ user_id: currentUserId, friend_id: user.id })
        .then(() => fetchUser(user.id))
    }

    currentStyle = style;



    FriendButton = () => {
      return (
        <div className={`profile-header__button${style}`} onClick={onFriendClick}>
          <span><FontAwesomeIcon icon={icon} /></span>
          <button type="button">{label}</button>
        </div>
      )
    }
  }

  const onDeleteFriend = () => {
    deleteFriendRequest({ user_id: currentUserId, friend_id: user.id })
      .then(() => fetchUser(user.id))
      .then(() => setShowFriendOptions(false))
  }

  const onConfirmFriend = () => {
    updateFriendRequest({ user_id: currentUserId, friend_id: user.id })
      .then(() => fetchUser(user.id))
      .then(() => setShowFriendOptions(false))
  }

  return (
    <div>
      <FriendButton />
      <OutsideClickNotifier excludeIds={[`profile-header__button${currentStyle}`]} sideEffect={() => setShowFriendOptions(false)} >
        <div className={`profile-header__option-menu${showFriendOptions ? '--show' : ''}`}>
          {
            user.friendshipStatus === 'PENDING_RECEIVED' ?
              <div
                className='profile-header__menu-item'
                onClick={onConfirmFriend}>
                <span className='profile-header__menu-icon'>
                  <FontAwesomeIcon icon={faUserPlus} />
                </span>
                <div className='profile-header__menu-edit'>
                  Confirm Request
              </div>
              </div>
              : null
          }
          <div
            className='profile-header__menu-item'
            onClick={onDeleteFriend}>
            <span className='profile-header__menu-icon'>
              <FontAwesomeIcon icon={faUserMinus} />
            </span>
            <div className='profile-header__menu-edit'>
              {
                user.friendshipStatus === 'PENDING_RECEIVED' ?
                  'Delete Request' : 'Unfriend'
              }
            </div>
          </div>
        </div>
      </OutsideClickNotifier>
    </div>
  )

}

export default FriendButton;
