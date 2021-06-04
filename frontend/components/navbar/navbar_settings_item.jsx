import React from 'react';

const NavbarSettingsItem = ({ id, active, setSelected }) => {

  return (
    <button type='button' id={id} className={`navbar-settings-item${active ? '--active' : ''}`} onClick={setSelected}>
        user
    </button>
  )
}

export default NavbarSettingsItem;