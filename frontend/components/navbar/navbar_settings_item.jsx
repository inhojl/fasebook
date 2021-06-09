import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavbarSettingsItem = ({ id, active, setSelected, currentProfile }) => {


  return (
    <button type='button' id={id} className={`navbar-settings-item${active ? '--active' : ''}`} onClick={setSelected}>
        {
          currentProfile && currentProfile.profilePicUrl ?
            <div 
              className='navbar-settings-item__profile-image' 
              style={{backgroundImage: `url(${window.location.origin + currentProfile.profilePicUrl})`}}
            ></div>
            :  <div className='navbar-settings-item__no-img'><FontAwesomeIcon icon={faUser} /></div>
        }
    </button>
  )
}

export default NavbarSettingsItem;