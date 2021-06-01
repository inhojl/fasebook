import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import HomePageContainer from '../pages/home/home_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;