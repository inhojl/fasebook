import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const NavbarCreateMenu = () => {

  return (
    <ul className='navbar-create-menu'>
      <h1 className='navbar-create-menu__header'>Create</h1>
      <li className='navbar-create-menu__post-item'>
        <span className='navbar-create-menu__post-icon'>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <div className='navbar-create-menu__post-label'>
          <span className='navbar-create-menu__post-heading'>
            Post
          </span>
          <span className='navbar-create-menu__post-description'>
            Share a post on News Feed.
          </span>
        </div>
      </li>
    </ul>
  )

}

export default NavbarCreateMenu;