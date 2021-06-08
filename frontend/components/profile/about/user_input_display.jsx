import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPencilAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { snakeCase } from 'snake-case';
import OutsideClickNotifier from '../../shared/outside_click_notifier';
import CurrentUserItem from '../../util/current_user_item_container';



const UserInputDisplay = ({ user, name, value, label, icon, updateUser, setShow, showEdit, showDelete }) => {

  const [showMenu, setShowMenu] = useState(false);

  const onEdit = () => {
    setShow(true)
    setShowMenu(false);
  }

  const onDelete = () => {
    updateUser({ id: user.id, [snakeCase(name)]: '' })
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
      <CurrentUserItem>
        {showDelete || showEdit ?
          <div className='input-display__options'>
            <button
              id={`input-display__${name}-button`}
              type='button'
              className='input-display__option-button'
              onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <OutsideClickNotifier excludeIds={[`input-display__${name}-button`]} sideEffect={() => setShowMenu(false)} >
              <div className={`input-display__option-menu${showMenu ? '--show' : ''}`}>
                {
                  showEdit ?
                    <div className='input-display__menu-item' onClick={onEdit}>
                      <span className='input-display__menu-icon'>
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </span>
                      <div className='input-display__menu-edit'>
                        Edit {label.toLowerCase()}
                      </div>
                    </div>
                    : null
                }
                {
                  showDelete ?
                    <div className='input-display__menu-item' onClick={onDelete}>
                      <div className='input-display__menu-icon'>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </div>
                      <div className='input-display__menu-delete'>
                        Delete {label.toLowerCase()}
                      </div>
                    </div>
                    : null
                }
              </div>
            </OutsideClickNotifier>
          </div>
          : null
        }
      </CurrentUserItem>
    </div>
  );

}

export default UserInputDisplay;