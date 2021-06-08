import React, { useState } from 'react';
import GenderRadioGroup from '../../splash/forms/inputs/gender_radio_group';
import { snakeCase } from 'snake-case';

const AboutGenderInput = ({ user, name, updateUser, onCancel }) => {

  const [ genderId, setGenderId ] = useState(user.genderId.toString()) 


  const onSubmit = (event) => {
    event.preventDefault();
    console.log(genderId)
    updateUser({ id: user.id, [snakeCase(name)]: genderId })
      .always(() => onCancel())
  
  }
  
  return (
    <form onSubmit={onSubmit} className='input-form'>
      <GenderRadioGroup
      className='input-form__gender-group'
      genderId={genderId}
      setGenderId={(e) => setGenderId(e.target.value)}
      errors={[]}
      disabled={false} />
      <div className='input-form__divider'></div>
      <div className='input-form__form-options'>
        <button onClick={onCancel} className='input-form__cancel-button' type='button'>Cancel</button>
        <button className='input-form__submit-button' type='submit'>Save</button>
      </div>
    </form>
  );
}

export default AboutGenderInput;