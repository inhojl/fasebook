import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const NavbarSettingsMenu = ({ currentUser, currentUserId, setSelected, logout }) => {

  let history = useHistory();

  const onLogout = () => {
    logout().then(() => history.push('/'));
    setSelected('');
  }
  return (
    <ul className='navbar-settings-menu'>
      <Link to={`/${currentUserId}`} onClick={() => setSelected('')}>
        <li className='navbar-settings-menu__header'>
            <span className='navbar-settings-menu__profile-picture'></span>
            <div className='navbar-settings-menu__user-profile'>
              <span className='navbar-settings-menu__user-name'>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
              <span className='navbar-settings-menu__profile-message'>See your profile</span>
            </div>
        </li>
      </Link>
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