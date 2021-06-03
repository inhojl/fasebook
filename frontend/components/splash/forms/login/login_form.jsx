import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const LoginForm = ({ login, setShowSignupModal, errors, resetErrors }) => {

  const [email, setEmail] = useState('');
  const [demoEmail, setDemoEmail] = useState('welcome@fasebook.com');
  const [password, setPassword] = useState('');
  const [demoPassword, setDemoPassword] = useState('w3lcomeToFasebook');
  const [animateEmail, setAnimateEmail] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    $('input[placeholder="Email"]').trigger('focus');
  }, [])

  useEffect(() => {
    if (animateEmail && demoEmail.length) {
      setTimeout(() => {
        setEmail(email + demoEmail[0])
      }, 40)
      setDemoEmail(demoEmail.slice(1))
    } else if (animateEmail && !demoEmail.length) { 
      setPassword(demoPassword[0])
      setDemoPassword(demoPassword.slice(1))
    }
  }, [email])

  useEffect(() => {
    if (animateEmail && demoPassword.length) {
      setTimeout(() => {
        setPassword(password + demoPassword[0])
      }, 40)
      setDemoPassword(demoPassword.slice(1))
    } else if (animateEmail && !demoPassword.length) { 
      setTimeout(()=> login({ email, password }),400);
      setAnimateEmail(false);
      setDemoEmail('welcome@fasebook.com');
      setDemoPassword('w3lcomeToFasebook');
    }
  }, [password])

  const onLogin = (event) => {
    event.preventDefault();
    resetErrors();
    setLoggingIn(true)
    $('.login-form__button--primary').addClass('js-opaque-1')
    $('.login-form__input-wrapper').addClass('js-opaque-1')

    setTimeout(() => {
      login({ email, password })
        .always(() => {
          setLoggingIn(false)
          $('.login-form__button--primary').removeClass('js-opaque-1')
          $('.login-form__input-wrapper').removeClass('js-opaque-1')
        })

    }, 3000)
  }

  const onCreateAccount = (event) => {
    setShowSignupModal(true);
    $('body').css('overflow', 'hidden');
  }


  const onDemoUser = (event) => {
    setAnimateEmail(true);
    setEmail(demoEmail[0])
    setDemoEmail(demoEmail.slice(1))
  }


  const renderError = (key) => {
    return (
    <>
      <span className='login-form__error-icon'>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>
      <span className='login-form__error-message'>
        {errors[key].map((error) => error).join('. ')}
        <span className='login-form__error-message-arrow'>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </span>
    </>
    )
  };

  return (
    <form onSubmit={onLogin} className='login-form' spellCheck={false}>
      <div className='login-form__input-wrapper'>
        { errors.email.length ? renderError('email') : null }
        <input
          className={`login-form__input${ errors.email.length ? '--error' : '' }`}
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          value={email}
          disabled={loggingIn}
        >
        </input>
      </div>
      <div className='login-form__input-wrapper'>
        { errors.password.length ? renderError('password') : null }
        <input
          className={`login-form__input${ errors.password.length ? '--error' : '' }`}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          value={password}
          disabled={loggingIn}
        />
      </div>
      <button 
        className='login-form__button--primary' 
        type='submit'
        disabled={loggingIn}
        >Log In</button>
      <span className='login-form__demo-user' onClick={onDemoUser}>Demo User?</span>
      <div className='login-form__divider'></div>
      <button
        type='button'
        className='login-form__button--secondary'
        onClick={onCreateAccount}
      >Create New Account</button>
    </form>
  );
}

export default LoginForm;
