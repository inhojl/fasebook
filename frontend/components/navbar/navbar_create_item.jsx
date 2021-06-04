import React from 'react'

const NavbarCreateItem = ({ setSelected }) => {

  return (
    <button type="button" className='navbar-create-item' onClick={setSelected}>
      +
    </button>
  )
}

export default NavbarCreateItem;