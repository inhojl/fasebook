import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import NavbarContainer from './navbar/navbar_container';
import FriendsPageContainer from './friends/friends_page_container';
import ProfilePageContainer from './profile/profile_page_container';
import SearchPageContainer from './search/search_page_container';

import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
  <div className='app'>
    <NavbarContainer />
    <Switch>
      <ProtectedRoute path="/friends" component={FriendsPageContainer} />
      <ProtectedRoute path="/search" component={SearchPageContainer} />
      <ProtectedRoute path="/:userId" component={ProfilePageContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;