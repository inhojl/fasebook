import React from 'react';
import { NavLink } from 'react-router-dom'


const PathNavLink = (props) => (
  <NavLink isActive={(_, { pathname, search }) => pathname + search === (props.to)} {...props} />
);


const AboutHeader = ({ user, match }) => {

  return (
    <nav className='about-header'>
      <h1 className='about-header__heading'>About</h1>
      <PathNavLink
        exact to={`${match.path.replace(":userId", user.id)}/about`}
        className='about-header__overview'
        activeClassName='about-header__overview--active'>
        Overview
      </PathNavLink>
      <PathNavLink
        exact to={`${match.path.replace(":userId", user.id)}/about?section=places`}
        className='about-header__places'
        activeClassName='about-header__places--active'>
        Places Lived
      </PathNavLink>
      <PathNavLink
        exact to={`${match.path.replace(":userId", user.id)}/about?section=contact_and_basic_info`}
        className='about-header__contact-and-basic-info'
        activeClassName='about-header__contact-and-basic-info--active'
      >
        Contact and Basic Info
      </PathNavLink>
      <PathNavLink
        exact to={`${match.path.replace(":userId", user.id)}/about?section=relationships`}
        className='about-header__relationships'
        activeClassName='about-header__relationships--active'
      >
        Relationships
      </PathNavLink>
    </nav>
  )
}

export default AboutHeader;