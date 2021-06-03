import React, { useState, useEffect } from 'react';
import { useTarget } from '../../../../hooks/event';
import BirthdaySelection from '../inputs/birthday_selection.jsx';
import GenderRadioGroup from '../inputs/gender_radio_group.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const SignupForm = ({ signup, setShowSignupModal, errors, resetErrors }) => {
  const [firstName, setFirstName] = useTarget('');
  const [lastName, setLastName] = useTarget('');
  const [email, setEmail] = useTarget('');
  const [password, setPassword] = useTarget('');
  const [genderId, setGenderId] = useTarget('');
  const [year, setYear] = useTarget((new Date()).getFullYear());
  const [month, setMonth] = useTarget((new Date()).getMonth()+1);
  const [day, setDay] = useTarget((new Date()).getDate());
  const [ loggingIn, setLoggingIn ] = useState(false);

  useEffect(() => {
    $('input[placeholder="First name"]').trigger('focus');
    resetErrors();
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      birthdate: `${year}-${month}-${day}`,
      gender_id: genderId,
      email,
      password
    };

    resetErrors();
    setLoggingIn(true)
    $('.signup-form__signup-button').addClass('js-opaque-1')
    $('div[class^="signup-form__input-wrapper"]').addClass('js-opaque-1')
    signup(user)
      .always(() => {
        setLoggingIn(false)
        $('.signup-form__signup-button').removeClass('js-opaque-1')
        $('div[class^="signup-form__input-wrapper"]').removeClass('js-opaque-1')
      })
  };

  const onExit = (event) => {
    setShowSignupModal(false);
    $('body').css('overflow', 'visible');
  }

  const renderError = (key) => {
    return (
    <>
      <span className='signup-form__error-icon'>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>
      <span className='signup-form__error-message'>
        { errors[key].map((error) => error).join(' ') }
        <span className='signup-form__error-message-arrow'>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </span>
    </>
    )
  };

  return (
    <form onSubmit={onSubmit} className='signup-form' spellCheck={false}>
      <button type='button' className='signup-form__exit-button' onClick={onExit}>&times;</button>
      <header className='signup-form__header'>
        <h3 className='signup-form__title'>Sign Up</h3>
        <p className='signup-form__message'>It's quick and easy.</p>
      </header>
      <div className='signup-form__divider'></div>
      <div className='signup-form__fields'>

        <div className='signup-form__input-wrapper'>
          { errors.firstName.length ? renderError('firstName') : null }
          <input
            type='text'
            placeholder='First name'
            onChange={setFirstName}
            className={`signup-form__input${ errors.firstName.length ? '--error' : '' }`}
            disabled={loggingIn}
          ></input>
        </div>

        <div className='signup-form__input-wrapper'>
          { errors.lastName.length ? renderError('lastName') : null }
          <input
            type='text'
            placeholder='Last name'
            onChange={setLastName}
            className={`signup-form__input${ errors.lastName.length ? '--error' : '' }`}
            disabled={loggingIn}
          ></input>
        </div>

        <div className='signup-form__input-wrapper'>
          { errors.email.length ? renderError('email') : null }
          <input
            type='text'
            placeholder='Email'
            onChange={setEmail}
            className={`signup-form__input${ errors.email.length ? '--error' : '' }`}
            disabled={loggingIn}
          ></input>
        </div>

        <div className='signup-form__input-wrapper'>
          { errors.password.length ? renderError('password') : null }
          <input
            type='password'
            placeholder='New password'
            onChange={setPassword}
            className={`signup-form__input${ errors.password.length ? '--error' : '' }`}
            disabled={loggingIn}
          ></input>
        </div>

        <div className='signup-form__input-wrapper--select-group'>
          { errors.birthdate.length ? renderError('birthdate') : null }
          <BirthdaySelection
            year={year}
            month={month}
            day={day}
            setYear={setYear}
            setMonth={setMonth}
            setDay={setDay}
            errors={errors.birthdate}
            disabled={loggingIn}
          ></BirthdaySelection>
        </div>

        <div className='signup-form__input-wrapper--radio-group'>
          { errors.genderId.length ? renderError('genderId') : null }
          <GenderRadioGroup 
            className='signup-form__radio-group'
            genderId={genderId}
            setGenderId={setGenderId}
            errors={errors.genderId}
            disabled={loggingIn}
          ></GenderRadioGroup>
        </div>

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
