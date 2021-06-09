import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileCreatePost = ({ profile }) => {

  return (
    <div className='profile-create-post'>
      <div className='profile-create-post__profile-image-wrapper'>
        {
          profile && profile.profilePicUrl ?
            <div
              className='profile-create-post__profile-image'
              style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
            ></div>
            : <div className='profile-create-post__no-img'><FontAwesomeIcon icon={faUser} /></div>
        }
      </div>
      <button type="button" className='profile-create-post__button'>What's on your mind?</button>
    </div>
  )

}

export default ProfileCreatePost;