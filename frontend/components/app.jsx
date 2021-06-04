import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import NavbarContainer from './navbar/navbar_container';;
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
  <div className='app'>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;