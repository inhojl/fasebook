import React from 'react';
import ProfileIntroItem from './profile_intro_item';
import CurrentUserItem from '../util/current_user_item_container';


const ProfileIntro = ({ relationshipStatuses, profile, setShowEditDetailsForm }) => {

  console.log(relationshipStatuses)
  console.log(profile)

  const onClick = () => {
    setShowEditDetailsForm(true)
    $('body').css({
      'position': 'fixed'
    })
  }


  return (
    <div className='profile-intro'>
      <h1 className='profile-intro__heading'>Intro</h1>
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
      <CurrentUserItem>
        <button type='button' onClick={onClick} className='profile-intro__edit-details'>Edit Details</button>
      </CurrentUserItem>
    </div>
  )

}

export default ProfileIntro;