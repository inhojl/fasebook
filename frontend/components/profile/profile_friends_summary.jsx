import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid'

const ProfileFriendsSummary = ({ users, profiles, loaded, setLoaded, fetchFriends }) => {

  let { userId } = useParams();
  let { pathname } = useLocation();

  useEffect(() => {
      fetchFriends(userId)
        .then(() => setLoaded(true))
  }, [userId])

  const user = users[userId]

  return loaded && user.friendIds ? (
    <div className='profile-friends-summary'>
      <div className='profile-friends-summary__header'>
        <Link to={`${pathname}/friends`}>
          <h1 className='profile-friends-summary__heading'>Friends</h1>
        </Link>

        <div className='profile-friends-summary__see-all-wrapper'>
          <div className='profile-friends-summary__see-all-background'></div>
          <Link className='profile-friends-summary__see-all' to={`${pathname}/friends`}>
            See All Friends
          </Link>
        </div>
      </div>
      <div className='profile-friends-summary__num'>{ user.friendIds.length } { user.friendIds.length === 1 ? 'friend' : 'friends' }</div>

      {
        user.friendIds.length > 0 ? 
          <div className='profile-friends-summary__preview'>
            <ul className='profile-friends-summary__grid'>
              {
                user.friendIds.map((friendId, index) => {
                  const friend = users[friendId];
    
                  if (!profiles || !friend) return null;

                  const friendProfile = profiles[friend.profileId]
                  return index < 9 ? (
                    <Link to={`/${friend.id}`} key={`friend-${uniqid()}`}>
                      <li className='profile-friends-summary__item'>
                        {
                          friendProfile && friendProfile.profilePicUrl ?
                            <div
                              className='profile-friends-summary__profile-image'
                              style={{ backgroundImage: `url(${window.location.origin + friendProfile.profilePicUrl})` }}
                            ></div>
                            : 
                            <div className='profile-friends-summary__no-img'><FontAwesomeIcon icon={faUser} /></div>
                          
                        }
                        <span className='profile-friends-summary__name'>{friend.firstName} {friend.lastName}</span>  
                      </li>
                    </Link>
                  ) : null;
                })
              }
            </ul>
          </div>
        : null
      }

    </div>
  ) : null

}

export default ProfileFriendsSummary;