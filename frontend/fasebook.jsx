import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { currentUserState } from './util/bootstrap';
import configureStore from './redux/store';

//import './util/api' // testing ajax requests

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(currentUserState());
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});