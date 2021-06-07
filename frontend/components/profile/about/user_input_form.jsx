import React, { useState } from 'react';
import { snakeCase } from 'snake-case';

const UserInputForm = ({ name, placeholder, updateUser, onCancel, user }) => {


  const [value, setValue] = useState(user[name] || '')

  const onInputFormSubmit = (event) => {
    event.preventDefault();
    updateUser({ id: user.id, [snakeCase(name)]: value })
    onCancel();
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

export default UserInputForm;
