import React, { useEffect } from 'react';
import ProfileHeader from './profile_header';
import ProfileWall from './profile_wall';
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
        <ProfileWall />
      </main>
    </div>
  ) : null;

}

export default ProfilePage;