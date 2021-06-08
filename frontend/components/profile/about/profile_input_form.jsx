import React, { useState } from 'react';
import { snakeCase } from 'snake-case';

const ProfileInputForm = ({ name, placeholder, updateProfile, onCancel, profile }) => {


  const [value, setValue] = useState(profile[name] || '')

  const onInputFormSubmit = (event) => {
    event.preventDefault();
    updateProfile({ id: profile.id, [snakeCase(name)]: value })
      .always(() => onCancel());
  
  }

  return (
    <form onSubmit={onInputFormSubmit} className='input-form'>
      <div className='input-form__input-wrapper'>
        <input
          className='input-form__input'
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div 
          className={`input-form__placeholder${value !== '' ? '--active' : '' }`}>
          {placeholder}
        </div>
      </div>

      <div className='input-form__divider'></div>
      <div className='input-form__form-options'>
        <button onClick={onCancel} className='input-form__cancel-button' type='button'>Cancel</button>
        <button disabled={value === ''} className='input-form__submit-button' type='submit'>Save</button>
      </div>
    </form>
  );

}

export default ProfileInputForm;
