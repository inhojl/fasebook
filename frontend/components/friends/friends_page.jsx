import React, { useEffect } from 'react';
import {Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route'
import ProfilePageContainer from '../profile/profile_page_container'
import FriendsSidebar from './friends_sidebar'
import FriendsPrompt from './friends_prompt'

const FriendsPage = ({
  currentUserId,
  users,
  profiles,
  fetchFriendRequesters,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest,
  match
}) => {


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
      <div className='friends-layout__profile'>
          <Switch>
            <ProtectedRoute path={`/friends/:userId`} component={ProfilePageContainer}></ProtectedRoute>
            <ProtectedRoute friendRequesterIds={users[currentUserId].friendRequesterIds || []} exact path='/friends' component={FriendsPrompt}></ProtectedRoute>
          </Switch>
      </div>
    </div>
  );
}

export default FriendsPage;