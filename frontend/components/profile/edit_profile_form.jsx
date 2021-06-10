import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileBiographyForm from './profile_biography_form';
import ProfileIntroItem from './profile_intro_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';


const EditProfileForm = ({ user, profile, setShowEditProfileForm, updateProfile, relationshipStatuses, updateProfileFormData }) => {


  const [showBiographyForm, setShowBiographyForm] = useState(false);
  const [ profilePicFile, setProfilePicFile ] = useState(null);
  const [ coverPhotoFile, setCoverPhotoFile ] = useState(null);


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

  const onExitModal = () => setShowEditProfileForm(false);

  return (
    <div className='edit-profile'>
      <button onClick={() => setShowEditProfileForm(false)} type='button' className='edit-profile__exit-button'>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1 className='edit-profile__heading'>Edit Profile</h1>
      <div className='edit-profile__divider'></div>
      <div className='edit-profile__container'>
        <div className='edit-profile__subheading-wrapper'>
          <h2 className='edit-profile__subheading'>Profile Picture</h2>
          <span className='edit-profile__button' onClick={onProfilePhotoClick}>
            {profile.profilePicUrl ? 'Edit' : 'Add'}
            <input type="file" className='edit-profile__profile-pic-upload' onChange={onChangeProfilePhoto} />
          </span>
        </div>
        <div className='edit-profile__profile-picture-container'>
          {
            profile.profilePicUrl ?
              <div 
                className='edit-profile__profile-image'
                style={{backgroundImage: `url(${window.location.origin + profile.profilePicUrl})`}}>
              </div>
              : <div className='edit-profile__no-img'><FontAwesomeIcon icon={faUser}/></div>
        
          }
        </div>
        <div className='edit-profile__subheading-wrapper'>
          <h2 className='edit-profile__subheading'>Cover Photo</h2>
          <span className='edit-profile__button' onClick={onCoverPhotoClick}>
            {profile.coverPhotoUrl ? 'Edit' : 'Add'}
            <input type="file" className='edit-profile__cover-photo-upload' onChange={onChangeCoverPhoto} />
          </span>
        </div>
        <div className='edit-profile__cover-photo-container'>
          <div 
            className='edit-profile__cover-photo-image'
            style={{backgroundImage: `url(${window.location.origin + profile.coverPhotoUrl})`}}>
          </div>
        </div>
        <div className='edit-profile__subheading-wrapper'>
          <h2 className='edit-profile__subheading'>Bio</h2>
          <span onClick={() => setShowBiographyForm(true)} className='edit-profile__button'>{profile.biography ? 'Edit' : 'Add'}</span>
        </div>
        <div className='edit-profile__bio-content'>
          {
            profile.biography && !showBiographyForm ?
              <p className='profile-header__biography'>{profile.biography}</p>
              : null
          }
          {
            !profile.biography && !showBiographyForm ?
              <p className='edit-profile__describe-yourself'>Describe yourself...</p>
              : null
          }
          {
            showBiographyForm ?
              <ProfileBiographyForm setShowBiographyForm={setShowBiographyForm} profile={profile} updateProfile={updateProfile} />
              : null
          }
        </div>
        <div className='edit-profile__subheading-wrapper'>
          <h2 className='edit-profile__subheading'>Customize Your Intro</h2>
          <Link to={`/${user.id}/about`} onClick={onExitModal}>
            <span className='edit-profile__button'>
              {
                profile.currentCity || profile.hometown || profile.relationshipStatusId ? 'Edit' : 'Add'
              }
            </span>
          </Link>
        </div>
        <div className='edit-profile__intro-content'>
          {
            profile.currentCity ?
              <ProfileIntroItem
                type='currentCity'
                prefix='Lives in'
                value={profile.currentCity} />
              : null
          }
          {
            profile.hometown ?
              <ProfileIntroItem
                type='hometown'
                prefix='From'
                value={profile.hometown} />
              : null
          }
          {
            relationshipStatuses && profile.relationshipStatusId ?
              <ProfileIntroItem
                type='relationshipStatus'
                prefix={relationshipStatuses[profile.relationshipStatusId] ? relationshipStatuses[profile.relationshipStatusId].label : ''} />
              : null
          }
        </div>
        <div className='edit-profile__about-link-wrapper'>
          <Link onClick={onExitModal} to={`/${user.id}/about`} className='edit-profile__about-link'>
            Edit Your About Info
          </Link>
        </div>
      </div>
    </div>
  );

}


export default EditProfileForm;