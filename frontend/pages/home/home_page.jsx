import React from 'react';
import SplashPage from '../splash/splash_page';
import NewsfeedPage from '../newsfeed/newsfeed_page';

const HomePage = ({ loggedIn }) => (
  loggedIn ? <NewsfeedPage /> : <SplashPage /> 
)
export default HomePage;