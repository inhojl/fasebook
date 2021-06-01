import React from "react";
import SplashHeader from "../../components/splash/splash_header";
import LoginForm from "../../components/forms/login_form";
import SplashFooter from "../../components/splash/splash_footer";

const SplashPage = () => (
  <div className="splash-layout">
    <div className="splash-layout__background">
      <div className="splash-layout__main">
        <div className="splash-layout__main-item">
          <SplashHeader />
        </div>
        <div className="splash-layout__main-item">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="splash-layout__footer">
      <SplashFooter />
    </div>
  </div>
);

export default SplashPage;
