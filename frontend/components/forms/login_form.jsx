import React from 'react';
import { useCurrentTarget } from '../../hooks/useCurrentTarget';

const LoginForm = ({ login }) => {

  const [ email, setEmail ] = useCurrentTarget('');
  const [ password, setPassword] = useCurrentTarget('');

  const onLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  }
  
  return (
    <form onSubmit={onLogin} className='login-form'>
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
      <button type='button' className='login-form__button--secondary'>Create New Account</button>
    </form>
  );
}

export default LoginForm;
