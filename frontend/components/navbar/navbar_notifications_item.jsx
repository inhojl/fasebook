import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NavbarNotificationsItem = ({ setSelected }) => {

  return (
    <button type="button" className='navbar-notifications-item' onClick={setSelected}>
      <FontAwesomeIcon icon={faBell} />
    </button>
  )
}

export default NavbarNotificationsItem;