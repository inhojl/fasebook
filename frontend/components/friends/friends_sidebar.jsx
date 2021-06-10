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

  useEffect(() => {
    fetchFriendRequesters(currentUserId)
      .then(() => setLoaded(true))
  },[])
  const currentUser = users[currentUserId]
  return loaded && currentUser ? (
    <div className='friends-sidebar'>
      <h1 className='friends-sidebar__heading'>Friends</h1>
      {
        currentUser.friendRequesterIds ?
        <h2 className='friends-sidebar__count'>{currentUser.friendRequesterIds.length} {currentUser.friendRequesterIds.length === 1 ? 'Friend Request' : 'Friend Requests'}</h2>
        : null
      }
      <ul className='friends-sidebar__list'>
        {
          currentUser.friendRequesterIds ? 
            currentUser.friendRequesterIds.map((friendRequesterId, index) => {
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