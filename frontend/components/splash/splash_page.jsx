import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SplashHeader from './splash_header';
import LoginFormContainer from './forms/login/login_form_container';
import SplashFooter from './splash_footer';
import SignupFormContainer from './forms/signup/signup_form_container';


const SplashPage = () => {

  const [ showSignupModal, setShowSignupModal ] = useState(false);

  return (
    <div className='splash-layout'>
      <div className='splash-layout__main-background'>
        <div className='splash-layout__main'>
          <div className='splash-layout__main-item'>
            <SplashHeader />
          </div>
          <div className='splash-layout__main-item'>
            <LoginFormContainer setShowSignupModal={setShowSignupModal} />
          </div>
        </div>
      </div>
      <div className='splash-layout__footer'>
        <SplashFooter />
      </div>

      <CSSTransition
        in={showSignupModal}
        timeout={200}
        classNames='js-show-modal'
        unmountOnExit
        onEnter={() => setShowSignupModal(true)}
        onExited={() => setShowSignupModal(false)}
      >
        <div className='splash-layout__modal'>
          <div className='splash-layout__modal-top-guard'>
            <div className='splash-layout__modal-center'>
              <SignupFormContainer setShowSignupModal={setShowSignupModal} />
            </div>
          </div>
          <div className='splash-layout__modal-background'></div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SplashPage;
