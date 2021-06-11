import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisH, faUserTimes, faUserCheck, faUserPlus, faUserMinus, faUser } from '@fortawesome/free-solid-svg-icons';
import OutsideClickNotifier from '../shared/outside_click_notifier';



const FriendItemOptions = ({ 
  friend, 
  showFriendOptions, 
  setShowFriendOptions,
  deleteFriendRequest,
  updateFriendRequest,
  createFriendRequest,
  currentUserId }) => {

    


    let icon;
    let label = ''
    let label2 = ''
    let onFriendClick = () => { }
    let onFriendClick2 = null;
    if (friend.friendshipStatus === 'PENDING_SENT') {
      label = 'Cancel Request'
      icon = faUserTimes
      onFriendClick = () => deleteFriendRequest({ user_id: currentUserId, friend_id: friend.id })
                              .then(() => setShowFriendOptions(false))
    } else if (friend.friendshipStatus === 'PENDING_RECEIVED') {
      label = 'Confirm Request'
      label2 = 'Delete Request'
      icon = faUserCheck
      onFriendClick = () => updateFriendRequest({ user_id: currentUserId, friend_id: friend.id })              
                              .then(() => setShowFriendOptions(false))
      onFriendClick2 = () => deleteFriendRequest({ user_id: currentUserId, friend_id: friend.id })              
                              .then(() => setShowFriendOptions(false))
    } else if (friend.friendshipStatus === 'FRIENDS') {
      label = 'Unfriend'
      icon = faUserMinus
      onFriendClick = () => deleteFriendRequest({ user_id: currentUserId, friend_id: friend.id })
                              .then(() => setShowFriendOptions(false))
    }
    else {
      label = 'Add Friend'
      icon = faUserPlus
      onFriendClick = () => createFriendRequest({ user_id: currentUserId, friend_id: friend.id })
                              .then(() => setShowFriendOptions(false))                  
    }


  return (
    <div className='friend-item-options'>

      {
        currentUserId !== friend.id ? 
          <button type='button' id='friend-item-options__button' className='friend-item-options__button' onClick={() => setShowFriendOptions(!showFriendOptions)}>
            <FontAwesomeIcon icon={faEllipsisH} className='friend-item-options__svg'/>
          </button>
        : null
      }
     
      <OutsideClickNotifier excludeIds={[`friend-item-options__button`]} sideEffect={() => setShowFriendOptions(false)} >
        <div className={`friend-item-options__option-menu${showFriendOptions ? '--show' : ''}`}>
          {
            friend.friendshipStatus === 'PENDING_RECEIVED' ?
              <div 
                className='friend-item-options__menu-item' 
                onClick={() => updateFriendRequest({ user_id: currentUserId, friend_id: friend.id })}>
                <span className='friend-item-options__menu-icon'>
                  <FontAwesomeIcon icon={faUserPlus} />
                </span>
                <div className='friend-item-options__menu-edit'>
                  {label}
                </div>
              </div>
            : null
          }
          <div 
            className='friend-item-options__menu-item' 
            onClick={onFriendClick2 ? onFriendClick2 : onFriendClick}>
            <span className='friend-item-options__menu-icon'>
              <FontAwesomeIcon icon={icon} />
            </span>
            <div className='friend-item-options__menu-edit'>
              {label2 ? label2 : label}
            </div>
          </div>
        </div>
      </OutsideClickNotifier>
    </div>
  )
}

export default FriendItemOptions;