import React from 'react';

const NavbarSettingsItem = ({ setSelected }) => {

  return (
    <button type='button' className='navbar-settings-item' onClick={setSelected}>
        user
    </button>
  )
}

export default NavbarSettingsItem;