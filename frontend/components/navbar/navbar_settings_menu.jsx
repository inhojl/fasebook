import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
const NavbarSettingsMenu = ({ currentProfile, currentUser, currentUserId, setSelected, logout }) => {

  let history = useHistory();

  const onLogout = () => {
    logout().then(() => history.push('/'));
    setSelected('');
  }


  return (
    <ul className='navbar-settings-menu'>
      <Link to={`/${currentUserId}`} onClick={() => setSelected('')}>
        <li className='navbar-settings-menu__header'>
          <div className='navbar-settings-menu__profile-image-wrapper'>
            {
              currentProfile && currentProfile.profilePicUrl ?
                <div
                  className='navbar-settings-item__profile-image'
                  style={{ backgroundImage: `url(${window.location.origin + currentProfile.profilePicUrl})` }}
                ></div>
                : <div className='navbar-settings-menu__no-img'><FontAwesomeIcon icon={faUser} /></div>
            }
            
          </div>
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