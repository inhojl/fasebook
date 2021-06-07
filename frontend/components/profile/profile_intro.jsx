import React from 'react';
import ProfileIntroItem from './profile_intro_item';

const ProfileIntro = ({ relationshipStatuses, profile }) => {

  console.log(relationshipStatuses)
  console.log(profile)

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
            prefix={relationshipStatuses[profile.relationshipStatusId].label} />
          : null
      }
      <button type='button' className='profile-intro__edit-details'>Edit Details</button>
    </div>
  )

}

export default ProfileIntro;