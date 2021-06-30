import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../util/loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileCreatePost = ({ profile, currentUser, currentUserProfile, user, setShowPostForm, newsfeed }) => {

  const onClick = () => {
    setShowPostForm(true)
    $('body').css({
      'position': 'fixed'
    })
  }


  return newsfeed || (profile && user && currentUser && currentUserProfile) ? (

    <div className='profile-create-post'>
      <Link to={`/${currentUser ? currentUser.id : ''}`}>
        <div className='profile-create-post__profile-image-wrapper'>
          {
            currentUserProfile && currentUserProfile.profilePicUrl ?
              <div
                className='profile-create-post__profile-image'
                style={{ backgroundImage: `url(${window.location.origin + currentUserProfile.profilePicUrl})` }}
              ></div>
              : <div className='profile-create-post__no-img'><FontAwesomeIcon icon={faUser} /></div>
          }
        </div>
      </Link>
      <button type="button" className='profile-create-post__button' onClick={onClick}>
        {
        
            profile && profile.userId === currentUser.id || newsfeed || currentUser.id === user.id ?
              "What's on your mind?"
              : `Write something to ${user ? user.firstName : ''}...`
          
        }
      </button>
    </div>
  ) : null

}

export default ProfileCreatePost;