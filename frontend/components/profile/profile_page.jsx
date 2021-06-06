import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route'
import ProfileHeader from './profile_header';
import ProfilePosts from './profile_posts';
import ProfileAbout from './profile_about';
import ProfileFriends from './profile_friends';

// should get user state
const ProfilePage = ({ user, profile, fetchUser, currentUserId, match }) => {

  useEffect(() => {
    // check for user
      // if user is legit
        // pull all user information
      // else
      // history.push("/")
      fetchUser(match.params.userId)
        .fail(() => history.push('/'))
  }, [])
  

  return user && profile ? (
    <div className='profile-layout'>
      <header className='profile-layout__header'>
        <ProfileHeader user={user} profile={profile} /> 
      </header>
      <main className='profile-layout__main'>
        <Switch>
          <ProtectedRoute exact path={match.path} component={ProfilePosts} />
          <ProtectedRoute exact path={`${match.path}/about`} component={ProfileAbout} />
          <ProtectedRoute exact path={`${match.path}/friends`} component={ProfileFriends} />
        </Switch>
      </main>
    </div>
  ) : null;

}

export default ProfilePage;