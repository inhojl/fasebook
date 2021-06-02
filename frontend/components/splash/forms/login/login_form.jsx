import React, { useEffect } from 'react';
import { useTarget } from '../../../../hooks/event';

const LoginForm = ({ login, setShowSignupModal }) => {

  const [ email, setEmail ] = useTarget('');
  const [ password, setPassword] = useTarget('');

  useEffect(() => {
    $('input[placeholder="Email"]').trigger('focus');
  },[])

  const onLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  }

  const onCreateAccount = (event) => setShowSignupModal(true);
  
  return (
    <form onSubmit={onLogin} className='login-form' spellCheck={false}>
      <input
        className='login-form__input'
        type='text'
        onChange={setEmail}
        placeholder='Email'
        value={email}
      />
      <input
        className='login-form__input'
        type='password'
        onChange={setPassword}
        placeholder='Password'
        value={password}
      />
      <button className='login-form__button--primary' type='submit'>Log In</button>
      <span className='login-form__demo-user'>Demo User?</span>
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
