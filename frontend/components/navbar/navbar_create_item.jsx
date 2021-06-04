import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NavbarCreateItem = ({ setSelected }) => {

  return (
    <button type="button" className='navbar-create-item' onClick={setSelected}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )
}

export default NavbarCreateItem;