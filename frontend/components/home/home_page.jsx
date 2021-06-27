import React from 'react';
import SplashPage from '../splash/splash_page';
import NewsfeedPageContainer from '../newsfeed/newsfeed_page_container';

const HomePage = ({ loggedIn }) => (
  loggedIn ? <NewsfeedPageContainer /> : <SplashPage /> 
)
export default HomePage;