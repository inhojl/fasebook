import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavbarSettingsMenu = ({ logout }) => {

  const onLogout = () => logout();

  return (
    <ul className='navbar-settings-menu'>
      <li className='navbar-settings-menu__header'>
        <span className='navbar-settings-menu__profile-picture'></span>
        <div className='navbar-settings-menu__user-profile'>
          <span className='navbar-settings-menu__user-name'>User</span>
          <span className='navbar-settings-menu__profile-message'>See your profile</span>
        </div>
      </li>
      <div className='navbar-settings-menu__divider'></div>
      <li className='navbar-settings-menu__logout' onClick={onLogout}>
        <span className='navbar-settings-menu__logout-icon'>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </span>
        <span className='navbar-settings-menu__logout-message'>Logout</span>
      </li>
    </ul>
  );
}

export default NavbarSettingsMenu;