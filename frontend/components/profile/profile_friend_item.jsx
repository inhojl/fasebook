import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FriendItemOptions from './friend_item_options';



const ProfileFriendItem = ({ 
  friend, 
  profile,
  currentUserId,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest }) => {

  const [ showFriendOptions, setShowFriendOptions ] = useState(false);

  return friend && profile ? (
    <li className='profile-friend-item'>
      <Link to={`/${friend.id}`}>
        {
          profile.profilePicUrl ?
          <div 
            className='profile-friend-item__profile-image'
            style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
          ></div>
          : <div className='profile-friend-item__no-img'><FontAwesomeIcon icon={faUser}/></div>
        }
      </Link>
      <div className='profile-friend-item__header'>
        <Link to={`/${friend.id}`}>
          <h2 className='profile-friend-item__name'>{friend.firstName} {friend.lastName}</h2>
        </Link>
        <span className='profile-friend-item__friend-count'>{friend.friendIds ? friend.friendIds.length: ''} {friend.friendIds.length === 1 ? 'friend' : 'friends'}</span>
      </div>
      <FriendItemOptions 
        friend={friend}
        showFriendOptions={showFriendOptions}
        setShowFriendOptions={setShowFriendOptions} 
        currentUserId={currentUserId}
        createFriendRequest={createFriendRequest}
        updateFriendRequest={updateFriendRequest}
        deleteFriendRequest={deleteFriendRequest}
      />
    </li>
  ): null;
}

export default ProfileFriendItem

