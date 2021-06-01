import React from 'react';
import SplashHeader from '../../components/splash/splash_header';
import LoginForm from '../../components/forms/login_form';
import SplashFooter from '../../components/splash/splash_footer';

const SplashPage = () => (
  <div>
    <div className='splash-layout'>
      <div className='splash-layout__main'>
        <SplashHeader />
        <LoginForm />
      </div>
      <div className='splash-layout__footer'>
        <SplashFooter />
      </div>
    </div>
    
  </div>
)

export default SplashPage;