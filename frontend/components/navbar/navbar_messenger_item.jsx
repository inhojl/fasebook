import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const NavbarMessengerItem = ({ setSelected }) => {

  return (
    <button type="button" className='navbar-messenger-item' onClick={setSelected}>
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </button>
  )
}

export default NavbarMessengerItem;