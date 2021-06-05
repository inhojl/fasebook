import React from 'react';
import { NavLink } from 'react-router-dom'

const ProfileTabItem = ({ label, path }) => {

  return (
    <NavLink exact to={path} className='profile-tab-item' activeClassName='profile-tab-item--active' >
      <div className='profile-tab-item__inner-frame'>
        {label}
      </div>
    </NavLink>
  )
}

export default ProfileTabItem;