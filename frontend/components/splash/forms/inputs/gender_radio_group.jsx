import React from 'react';

const GenderRadioGroup = ({ className, genderId, setGenderId, errors }) => {

  const onClick = (event) => {
    $(event.target).find('input[type="radio"]').trigger('click');
  }

  return (
    <div className={`${className} gender-radio-group`} >
      <label className='gender-radio-group__label'>Gender</label>
      <div className='gender-radio-group__group'>
        <span 
          className={`gender-radio-group__button${errors.length ? '--error' : ''}`}
          onClick={onClick}>
          <label htmlFor='female'>Female</label>
          <input
            id='female'
            type='radio'
            name='gender'
            checked={genderId === '2'}
            onChange={setGenderId}
            value='2'></input>
        </span>
        <span 
          className={`gender-radio-group__button${errors.length ? '--error' : ''}`}
          onClick={onClick}>
          <label htmlFor='male'>Male</label>
          <input
            id='male'
            type='radio'
            name='gender'
            checked={genderId === '1'}
            onChange={setGenderId}
            value='1'></input>
        </span>
        <span 
          className={`gender-radio-group__button${errors.length ? '--error' : ''}`}
          onClick={onClick}>
          <label htmlFor='custom'>Custom</label>
          <input
            id='custom'
            type='radio'
            name='gender'
            checked={genderId === '3'}
            onChange={setGenderId}
            value='3'></input>
        </span>
      </div>
    </div>
  );
}

export default GenderRadioGroup;