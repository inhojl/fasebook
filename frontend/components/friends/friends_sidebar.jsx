import React, { useState, useEffect } from 'react';
import FriendsSidebarItem from './friends_sidebar_item';
import { NavLink } from 'react-router-dom';

const FriendsSidebar = ({
  currentUserId,
  users,
  profiles,
  fetchFriendRequesters,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest
}) => {
  const [ loaded, setLoaded ] = useState(false)
  const [ friendRequesterIds, setFriendRequesterIds] = useState([])

  useEffect(() => {
    fetchFriendRequesters(currentUserId)
      .then(() => setLoaded(true))
  },[])

  useEffect(() => {
    if (friendRequesterIds.length === 0) {
      setFriendRequesterIds(currentUser.friendRequesterIds);
    }

  }, [currentUser])

  const currentUser = users[currentUserId]

  return loaded ? (
    <div className='friends-sidebar'>
      <h1 className='friends-sidebar__heading'>Friends</h1>
      {
        <h2 className='friends-sidebar__count'>{friendRequesterIds.length} {friendRequesterIds.length === 1 ? 'Friend Request' : 'Friend Requests'}</h2>
      }
      <ul className='friends-sidebar__list'>
        {
          friendRequesterIds.length ? 
            friendRequesterIds.map((friendRequesterId, index) => {
              return (
                <NavLink 
                  className="friends-sidebar-item-wrapper" 
                  activeClassName='friends-sidebar-item-wrapper--active' 
                  to={`/friends/${friendRequesterId}`} 
                  key={`sidebar-item${index}`}>
                  <FriendsSidebarItem
                    currentUserId={currentUserId}
                    friendRequesterId={friendRequesterId}
                    profiles={profiles}
                    users={users}
                    fetchFriendRequesters={fetchFriendRequesters}
                    createFriendRequest={createFriendRequest}
                    updateFriendRequest={updateFriendRequest}
                    deleteFriendRequest={deleteFriendRequest}
                    />
                </NavLink>
              )
            }) : null
        }

      </ul>
    </div>
  ) : null
}

export default FriendsSidebar;