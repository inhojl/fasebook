import React, { useEffect } from 'react';

// should get user state
const ProfilePage = () => {

  useEffect(() => {
    // check for user
      // if user is legit
        // pull all user information
      // else
      // history.push("/")
  }, [])
  

  return (
    <div style={{fontSize:30}}>
      Profile Page
      {/* <ProfileHeader />
      <ProfileWall /> */}
    </div>
  );

}

export default ProfilePage;