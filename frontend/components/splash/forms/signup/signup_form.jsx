import React, { useEffect } from 'react';
import { useTarget } from '../../../../hooks/event';
import { signup } from '../../../../redux/actions/session';
import BirthdaySelection from '../inputs/birthday_selection.jsx';
import GenderRadioGroup from '../inputs/gender_radio_group.jsx';

const SignupForm = ({ signup, setShowSignupModal }) => {
  const [firstName, setFirstName] = useTarget('');
  const [lastName, setLastName] = useTarget('');
  const [email, setEmail] = useTarget('');
  const [password, setPassword] = useTarget('');
  const [gender, setGender] = useTarget('');
  const [year, setYear] = useTarget((new Date()).getFullYear());
  const [month, setMonth] = useTarget((new Date()).getMonth()+1);
  const [day, setDay] = useTarget((new Date()).getDate());

  useEffect(() => {
    $('input[placeholder="First name"]').trigger('focus');
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      gender_id: gender,
      birthdate: `${year}-${month}-${day}`,
      email,
      password
    };

    signup(user);
  };

  const onExit = (event) => setShowSignupModal(false);

  return (
    <form onSubmit={onSubmit} className='signup-form' spellCheck={false}>
      <button type='button' className='signup-form__exit-button' onClick={onExit}>&times;</button>
      <header className='signup-form__header'>
        <h3 className='signup-form__title'>Sign Up</h3>
        <p className='signup-form__message'>It's quick and easy.</p>
      </header>
      <div className='signup-form__divider'></div>
      <div className='signup-form__fields'>
        <input
          type='text'
          placeholder='First name'
          onChange={setFirstName}
          className='signup-form__input'
        ></input>
        <input
          type='text'
          placeholder='Last name'
          onChange={setLastName}
          className='signup-form__input'
        ></input>
        <input
          type='text'
          placeholder='Email'
          onChange={setEmail}
          className='signup-form__input'
        ></input>
        <input
          type='password'
          placeholder='New password'
          onChange={setPassword}
          className='signup-form__input'
        ></input>
        <BirthdaySelection 
          className='signup-form__select-group' 
          year={year}
          month={month}
          day={day}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        ></BirthdaySelection>
        <GenderRadioGroup 
          className='signup-form__radio-group'
          gender={gender}
          setGender={setGender}
        ></GenderRadioGroup>
        <p className='signup-form__disclaimer'>
          By clicking Sign Up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.
        </p>
        <div className='signup-form__signup-button-wrapper'>
          <button className='signup-form__signup-button'>Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
