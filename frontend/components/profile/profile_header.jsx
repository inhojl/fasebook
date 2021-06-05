import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileTabItem from './profile_tab_item';

const ProfileHeader = ({ user, profile }) => {

  return (
    <div className='profile-header'>
      <div className='profile-header__picture-banner'>
        <span className='profile-header__cover-photo'>
          <img></img>
          <button type='button' className='profile-header__upload-cover-photo'>
            <FontAwesomeIcon icon={faCamera} />
            Add Cover Photo
          </button>
        </span>
        <span className='profile-header__profile-picture'>
          <div className='profile-header__profile-image'>img</div>
          <span className='profile-header__upload-profile-picture'><FontAwesomeIcon icon={faCamera} /></span>
        </span>
      </div>
      <div className='profile-header__heading'>
        <h1 className='profile-header__user-name'>{`${user.firstName} ${user.lastName}`}</h1>
        <p className='profile-header__biography'>{profile.biography}</p>
        <span className='profile-header__edit'>Edit</span>
      </div>
      <div className='profile-header__divider-wrapper'>
        <div className='profile-header__divider '></div>
      </div>
      <ul className='profile-header__nav'>
        <li className='profile-header__tab-item'>
          <ProfileTabItem path={`/${user.id}`} label='Posts' />
        </li>
        <li className='profile-header__tab-item'>
          <ProfileTabItem path={`/${user.id}/about`} label='About' />
        </li>
        <li className='profile-header__tab-item'>
          <ProfileTabItem path={`/${user.id}/friends`} label='Friends' />
        </li>
        <li className='profile-header__button'>
          <span><FontAwesomeIcon icon={faPencilAlt} /></span>
          <button type="button">Edit Profile</button>
        </li>
      </ul>
    </div>
  )

}

export default ProfileHeader;