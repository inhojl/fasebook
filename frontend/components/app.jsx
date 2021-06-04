import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import NavbarContainer from './navbar/navbar_container';
import FriendsPage from './friends/friends_page';
import ProfilePage from './profile/profile_page';
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
  <div className='app'>
    <NavbarContainer />
    <Switch>
      <ProtectedRoute exact path="/friends" component={FriendsPage} />
      <ProtectedRoute exact path="/:userId" component={ProfilePage} />
      <Route exact path="/" component={HomePageContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;