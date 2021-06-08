import React, { useState } from 'react'

const ProfileBiographyForm = ({ profile, updateProfile, showForm, setShowBiographyForm}) => {


  const [ biography, setBiography ] = useState(profile.biography)
  
  const onCancel = () => {
    setShowBiographyForm(false);
  }

  const onSave = (event) => {
    event.preventDefault();
    console.log(biography)
    updateProfile({ id: profile.id, biography })
      .always(() => (
        setShowBiographyForm(false)
      ))
  }

  return (
    <form onSubmit={onSave} className='profile-biography-form'>
      <textarea placeholder='Describe who you are' onChange={(e) => setBiography(e.target.value)} className='profile-biography-form__input' value={biography || ''}></textarea>
      <div className='profile-biography-form__options'>
        <button className='profile-biography-form__cancel' onClick={onCancel} type='button'>Cancel</button>
        <button className='profile-biography-form__save' type='submit'>Save</button>
      </div>
    </form>
)
}

export default ProfileBiographyForm;