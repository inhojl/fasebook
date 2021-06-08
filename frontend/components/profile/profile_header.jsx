import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileTabItem from './profile_tab_item';
import ProfileBiographyForm from './profile_biography_form';
import CurrentUserItem from '../util/current_user_item_container';

const ProfileHeader = ({
  user,
  profile,
  updateProfile,
  currentUserId,
  loading,
  isLoaded,
  isLoading,
  setShowEditProfileForm
}) => {

  const [showBiographyForm, setShowBiographyForm] = useState(false);

  const onClick = () => {
    setShowEditProfileForm(true)
    $('body').css({
      'position': 'fixed'
    })
  }


  return (
    <div className='profile-header'>
      <div className='profile-header__picture-banner'>
        <span className='profile-header__cover-photo'>
          <img></img>
          <CurrentUserItem >
            <button type='button' className='profile-header__upload-cover-photo'>
              <FontAwesomeIcon icon={faCamera} />
              Add Cover Photo
            </button>
          </CurrentUserItem>

        </span>
        <span className='profile-header__profile-picture'>
          <div className='profile-header__profile-image'>img</div>
          <CurrentUserItem>
            <span className='profile-header__upload-profile-picture'><FontAwesomeIcon icon={faCamera} /></span>
          </CurrentUserItem>
        </span>
      </div>
      <div className='profile-header__heading'>
        <h1 className='profile-header__user-name'>{`${user.firstName} ${user.lastName}`}</h1>
        {
          (profile.biography && !showBiographyForm) ?
            <p className='profile-header__biography'>{profile.biography}</p>
            : null
        }


        <CurrentUserItem>
          {
            showBiographyForm ?
              <ProfileBiographyForm
                setShowBiographyForm={setShowBiographyForm}
                profile={profile}
                updateProfile={updateProfile}
              />
              : <span onClick={() => setShowBiographyForm(true)} className={`profile-header__${profile.biography ? 'edit' : 'add'}`} >{profile.biography ? 'Edit' : 'Add Bio'}</span>
          }
        </CurrentUserItem>

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
        <CurrentUserItem>
          <li onClick={onClick} className='profile-header__button'>
            <span><FontAwesomeIcon icon={faPencilAlt} /></span>
            <button type="button">Edit Profile</button>
          </li>
        </CurrentUserItem>
      </ul>
    </div>
  )

}

export default ProfileHeader;