import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Requires user to be logged out to access component
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      loggedIn ?  <Redirect to='/' /> : <Component { ...props } /> 
    )}
  />
);

// Requires user to be logged in to access component
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      loggedIn ? <Component { ...props } /> : <Redirect to='/' />
    )}
  />
);

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
})

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);
