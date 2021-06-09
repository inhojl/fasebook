import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPencilAlt, faUser, faUserCheck, faUserPlus, faUserMinus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
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
  setShowEditProfileForm,
  updateProfileFormData,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest
}) => {

  const [showBiographyForm, setShowBiographyForm] = useState(false);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);

  useEffect(() => {
    if (profilePicFile) {
      const formData = new FormData();
      formData.append('profile[profile_picture]', profilePicFile)
      updateProfileFormData(profile.id, formData)
        .then(() => setProfilePicFile(null))
        .fail((error) => console.log(error))
    }
  }, [profilePicFile])

  useEffect(() => {
    if (coverPhotoFile) {
      const formData = new FormData();
      formData.append('profile[cover_photo]', coverPhotoFile)
      updateProfileFormData(profile.id, formData)
        .then(() => setCoverPhotoFile(null))
        .fail((error) => console.log(error))
    }
  }, [coverPhotoFile])




  const onClick = () => {
    setShowEditProfileForm(true)
    $('body').css({
      'position': 'fixed'
    })
  }

  const onCoverPhotoClick = () => {
    $('.profile-header__cover-photo-upload').trigger('click');
  }

  const onChangeCoverPhoto = (event) => {
    setCoverPhotoFile(event.currentTarget.files[0]);
  }

  const onProfilePhotoClick = () => {
    $('.profile-header__profile-pic-upload').trigger('click');
  }

  const onChangeProfilePhoto = (event) => {
    setProfilePicFile(event.currentTarget.files[0]);
  }

  let FriendButton = () => null;
  if (user && user.id != currentUserId) {
    let label = ''
    let icon;
    let style;
    let onFriendClick = () => {}
    if (user.friendshipStatus === 'PENDING_SENT') {
      label = 'Cancel Request'
      icon = faUserTimes
      style = '--sent'
      onFriendClick = () => deleteFriendRequest({ user_id: currentUserId, friend_id: user.id });
    } else if (user.friendshipStatus === 'PENDING_RECEIVED') {
      label = 'Respond'
      icon = faUserCheck
      style = '--received'
      onFriendClick = () => updateFriendRequest({ user_id: currentUserId, friend_id: user.id });

    } else if (user.friendshipStatus === 'FRIENDS') {
      label = 'Friends'
      icon = faUserCheck
      style = '--friends'
     // onFriendClick = () => deleteFriendRequest(user.id)
    }
    else {
      label = 'Add Friend'
      icon = faUserPlus
      style='--add'
      onFriendClick = () => createFriendRequest({ user_id: currentUserId, friend_id: user.id });
    }

    console.log(user.friendshipStatus)

    FriendButton = () => {
      return (
        <li className={`profile-header__button${style}`} onClick={onFriendClick}>
          <span><FontAwesomeIcon icon={icon} /></span>
          <button type="button">{label}</button>
        </li>
      )
    }
  }


  return (

    <div className='profile-header'>

      <div className='profile-header__picture-banner'>
        <div
          className='profile-header__cover-photo-wrapper'
          style={{ backgroundImage: `url(${window.location.origin + profile.coverPhotoUrl})` }}>

          <CurrentUserItem >
            <div className='profile-header__upload-cover-photo' onClick={onCoverPhotoClick}>
              <FontAwesomeIcon icon={faCamera} />
              <input
                type="file"
                className='profile-header__cover-photo-upload'
                onChange={onChangeCoverPhoto} />
              {profile.coverPhotoUrl ? 'Edit' : 'Add'} Cover Photo
            </div>
          </CurrentUserItem>

        </div>
        <span className='profile-header__profile-picture'>
          <div className='profile-header__profile-image-wrapper'>
            {
              profile.profilePicUrl ?
                <div
                  className='profile-header__profile-image'
                  style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
                ></div>
                : <div className='profile-header__no-img'><FontAwesomeIcon icon={faUser} /></div>
            }
          </div>
          <CurrentUserItem>
            <span className='profile-header__upload-profile-picture' onClick={onProfilePhotoClick}>
              <FontAwesomeIcon icon={faCamera} />
              <input
                type="file"
                className='profile-header__profile-pic-upload'
                onChange={onChangeProfilePhoto} />
            </span>
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
        <FriendButton />
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