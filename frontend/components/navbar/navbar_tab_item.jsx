import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const NavbarTabItem = ({ type, path }) => {
  
  let label; 
  switch (type) {
    case 'home':
      label = <FontAwesomeIcon icon={faHome} />;
      break;
    case 'friends':
      label = <FontAwesomeIcon icon={faUserFriends} />;
      break;
    default:
      label = type;
      break;
  }

  return (
    <NavLink exact to={path} className='navbar-tab-item' activeClassName='navbar-tab-item--active' >
      <div className='navbar-tab-item__icon'>
        {label}
      </div>
    </NavLink>
  )
}

export default NavbarTabItem;