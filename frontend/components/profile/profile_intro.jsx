import React from 'react';
import ProfileIntroItem from './profile_intro_item';

const ProfileIntro = () => {

  return (
    <div className='profile-intro'>
      <h1 className='profile-intro__heading'>Intro</h1>
        <ProfileIntroItem 
          type='currentCity' 
          prefix='Lives in' 
          value='Gotham' />
        <ProfileIntroItem
          type='hometown'
          prefix='From'
          value='Cave' />
        <ProfileIntroItem
          type='relationshipStatus'
          prefix='Single' />
      <button type='button' className='profile-intro__edit-details'>Edit Details</button>
    </div>
  )

}

export default ProfileIntro;