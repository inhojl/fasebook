import React from 'react';

const GenderRadioGroup = ({ className }) => (
  <div for='female' className={`${className} gender-radio-group`}>
    <label className='gender-radio-group__label'>Gender</label>
    <div className='gender-radio-group__group'>
      <span className='gender-radio-group__button'>
        <label for='female'>Female</label>
        <input id='female' type="radio" name="gender"></input>
      </span>
      <span className='gender-radio-group__button'>
        <label for='male'>Male</label>
        <input id='male' type="radio" name="gender"></input>
      </span>
      <span className='gender-radio-group__button'>
        <label for='custom'>Custom</label>
        <input id='custom' type="radio" name="gender"></input>
      </span>
    </div>
  </div>
)

export default GenderRadioGroup;