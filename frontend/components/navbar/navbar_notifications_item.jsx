import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NavbarNotificationsItem = ({ id, active, setSelected }) => {

  return (
    <button id={id} type="button" className={`navbar-notifications-item${active ? '--active' : ''}`} onClick={setSelected}>
      <FontAwesomeIcon icon={faBell} />
    </button>
  )
}

export default NavbarNotificationsItem;