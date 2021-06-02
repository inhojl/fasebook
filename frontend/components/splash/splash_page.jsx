import React from 'react';
import SplashHeader from './splash_header';
import LoginFormContainer from './forms/login/login_form_container';
import SplashFooter from './splash_footer';
import SignupFormContainer from './forms/signup/signup_form_container';

const SplashPage = () => (
  <div className='splash-layout'>
    <div className='splash-layout__main-background'>
      <div className='splash-layout__main'>
        <div className='splash-layout__main-item'>
          <SplashHeader />
        </div>
        <div className='splash-layout__main-item'>
          <LoginFormContainer />
        </div>
      </div>
    </div>
    <div className='splash-layout__footer'>
      <SplashFooter />
    </div>
    <div className='splash-layout__modal show'>
      <div className='splash-layout__modal-top-guard'>
        <div className='splash-layout__modal-center'>
          <SignupFormContainer />
        </div>
      </div>
      <div className='splash-layout__modal-background'></div>
    </div>
    
  </div>
);

export default SplashPage;
