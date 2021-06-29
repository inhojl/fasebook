import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NavbarCreateItem = ({ id, active, setSelected }) => {

  
  return (
    <button id={id} type="button" className={`navbar-create-item${active ? '--active' : ''}`} onClick={setSelected}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )
}

export default NavbarCreateItem;