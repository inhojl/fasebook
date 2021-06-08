import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileBiographyForm from './profile_biography_form';
import ProfileIntroItem from './profile_intro_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const EditProfileForm = ({ user, profile, setShowEditProfileForm, updateProfile, relationshipStatuses }) => {


  const [showBiographyForm, setShowBiographyForm] = useState(false);

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
          <span className='edit-profile__button'>Edit</span>
        </div>
        <div className='edit-profile__subheading-wrapper'>
          <h2 className='edit-profile__subheading'>Cover Photo</h2>
          <span className='edit-profile__button'>Edit</span>
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
            <span className='edit-profile__button'>Edit</span>
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