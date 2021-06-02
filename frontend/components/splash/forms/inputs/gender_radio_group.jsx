import React from 'react';

const GenderRadioGroup = ({ className }) => (
  <div className={`${className} gender-radio-group`}>
    <label className='gender-radio-group__label'>Gender</label>
    <div className='gender-radio-group__group'>
      <span className='gender-radio-group__button'>
        <label htmlFor='female'>Female</label>
        <input id='female' type="radio" name="gender"></input>
      </span>
      <span className='gender-radio-group__button'>
        <label htmlFor='male'>Male</label>
        <input id='male' type="radio" name="gender"></input>
      </span>
      <span className='gender-radio-group__button'>
        <label htmlFor='custom'>Custom</label>
        <input id='custom' type="radio" name="gender"></input>
      </span>
    </div>
  </div>
)

export default GenderRadioGroup;