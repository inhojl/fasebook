import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchUser } from '../../redux/actions/user';
import { fetchFriends } from '../../util/api/friendship';
import ProfileFriendItem from './profile_friend_item';

const ProfileFriends = ({
  user,
  profile,
  fetchProfile,
  updateProfile,
  updateUser,
  location,
  fetchRelationshipStatuses,
  relationshipStatuses,
  match,
  users,
  profiles,
  fetchFriends,
  createFriend,
  currentUserId,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest,
}) => {

  const [loaded, setLoaded] = useState(false);


  useEffect(() => {

    fetchFriends(match.params.userId)
      .then(() => setLoaded(true))
  }, [])




  return (
    <div className='profile-friends-layout'>
      <div className='profile-friends-layout__container'>
        <div className='profile-friends-layout__friends-container'>
          <h1 className='profile-friends-layout__heading'>Friends</h1>

          {
            user && user.friendIds && user.friendIds.length > 0 ?
              <ul className='profile-friends-layout__grid'>
                {
                  user && user.friendIds ?
                    user.friendIds.map((friendId, index) => {
                      const friend = users[friendId];
                      if (!friend) return null;
                      const profile = profiles[friend.profileId];
                      if (!profile) return null;
                      return (
                        <ProfileFriendItem
                          key={`friend-item-${index}`}
                          friend={friend}
                          profile={profile}
                          currentUserId={currentUserId}
                          createFriendRequest={createFriendRequest}
                          updateFriendRequest={updateFriendRequest}
                          deleteFriendRequest={deleteFriendRequest} />
                      );
                    }) : null
                }
              </ul>

              : null
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileFriends;