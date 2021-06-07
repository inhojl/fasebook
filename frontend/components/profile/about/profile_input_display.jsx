import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPencilAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { snakeCase } from 'snake-case';
import OutsideClickNotifier from '../../shared/outside_click_notifier';



const ProfileInputDisplay = ({ profile, name, value, label, icon, updateProfile,setShow }) => {

  const [ showMenu, setShowMenu ] = useState(false);

  const onEdit = () => {
    setShow(true)
    setShowMenu(false);
  }

  const onDelete = () => {
    updateProfile({ id: profile.id, [snakeCase(name)]: '' })
    setShowMenu(false);
  }

//   <OutsideClickNotifier excludeIds={['navbar-messenger-item']} sideEffect={() => {setSelected('')}}>
//   <NavbarMessengerMenu /> 
// </OutsideClickNotifier>   

  return (
    <div className='input-display'>
      <span className='input-display__icon'>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className='input-display__label-group'>
        <span className='input-display__value'>{value}</span>
        <span className='input-display__label'>{label}</span>
      </div>
      <div className='input-display__options'>
        <button 
          id={`input-display__${name}-button`}
          type='button' 
          className='input-display__option-button'
          onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        <OutsideClickNotifier excludeIds={[`input-display__${name}-button`]} sideEffect={() => setShowMenu(false)} >
          <div className={`input-display__option-menu${showMenu ? '--show': ''}`}>
            <div className='input-display__menu-item' onClick={onEdit}>
              <span className='input-display__menu-icon'>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
              <div className='input-display__menu-edit'>
                Edit {label.toLowerCase()}
              </div>
            </div>
            <div className='input-display__menu-item' onClick={onDelete}>
              <div className='input-display__menu-icon'>
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
              <div className='input-display__menu-delete'>
                Delete {label.toLowerCase()}
              </div>
            </div>
          </div>
        </OutsideClickNotifier>
      </div>
    </div>
  );

}

export default ProfileInputDisplay;