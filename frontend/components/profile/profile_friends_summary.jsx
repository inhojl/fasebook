import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileFriendsSummary = () => {

  let { pathname } = useLocation();

  return (
    <div className='profile-friends-summary'>
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
  )

}

export default ProfileFriendsSummary;