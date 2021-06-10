import React, { useEffect } from 'react';
import FriendsSidebar from './friends_sidebar'

const FriendsPage = ({
  currentUserId,
  users,
  profiles,
  fetchFriendRequesters,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest
}) => {
  console.log(currentUserId)


  return (
    <div className='friends-layout'>
      <div className='friends-layout__sidebar'>
        <FriendsSidebar
          currentUserId={currentUserId}
          users={users}
          profiles={profiles}
          fetchFriendRequesters={fetchFriendRequesters}
          createFriendRequest={createFriendRequest}
          updateFriendRequest={updateFriendRequest}
          deleteFriendRequest={deleteFriendRequest}
        />
      </div>
      <div className='profile-page'>

      </div>
    </div>
  );
}

export default FriendsPage;