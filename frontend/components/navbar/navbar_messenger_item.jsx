import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const NavbarMessengerItem = ({ id, active, setSelected }) => {
  return (
    <button id={id} type="button" className={`navbar-messenger-item${active ? '--active' : ''}`} onClick={setSelected}>
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </button>
  )
}

export default NavbarMessengerItem;