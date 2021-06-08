import React, { useState } from 'react';
import { useTarget } from '../../../hooks/event'
import AboutBirthdaySelection from './about_birthday_selection';
import { snakeCase } from 'snake-case';
import moment from 'moment'

const AboutBirthdayInput = ({ user, name, updateUser, onCancel }) => {

  const birthdate = moment(user.birthdate)

  const [year, setYear] = useTarget(birthdate.year());
  const [month, setMonth] = useTarget(birthdate.month()+1);
  const [day, setDay] = useTarget(birthdate.date());

  const onSubmit = (event) => {
    event.preventDefault();
    updateUser({ id: user.id, [snakeCase(name)]: `${year}-${month}-${day}` })
      .always(() => onCancel())
  
  }

  
  return (
    <form onSubmit={onSubmit} className='input-form'>
      <AboutBirthdaySelection
        year={year}
        month={month}
        day={day}
        setYear={setYear}
        setMonth={setMonth}
        setDay={setDay}
        errors={[]}
        disabled={false}
        isProfile
      ></AboutBirthdaySelection>
      <div className='input-form__divider'></div>
      <div className='input-form__form-options'>
        <button onClick={onCancel} className='input-form__cancel-button' type='button'>Cancel</button>
        <button className='input-form__submit-button' type='submit'>Save</button>
      </div>
    </form>
  );
}

export default AboutBirthdayInput;