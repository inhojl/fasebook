import React from 'react';

const GenderRadioGroup = ({ className, gender, setGender }) => {

  const onClick = (event) => {
    $(event.target).find('input[type="radio"]').trigger('click');
  }

  return (
    <div className={`${className} gender-radio-group`} >
      <label className='gender-radio-group__label'>Gender</label>
      <div className='gender-radio-group__group'>
        <span className='gender-radio-group__button' onClick={onClick}>
          <label htmlFor='female'>Female</label>
          <input
            id='female'
            type='radio'
            name='gender'
            checked={gender === '2'}
            onChange={setGender}
            value='2'></input>
        </span>
        <span className='gender-radio-group__button' onClick={onClick}>
          <label htmlFor='male'>Male</label>
          <input
            id='male'
            type='radio'
            name='gender'
            checked={gender === '1'}
            onChange={setGender}
            value='1'></input>
        </span>
        <span className='gender-radio-group__button' onClick={onClick}>
          <label htmlFor='custom'>Custom</label>
          <input
            id='custom'
            type='radio'
            name='gender'
            checked={gender === '3'}
            onChange={setGender}
            value='3'></input>
        </span>
      </div>
    </div>
  );
}

export default GenderRadioGroup;