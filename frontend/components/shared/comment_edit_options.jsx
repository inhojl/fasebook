import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import OutsideClickNotifier from './outside_click_notifier';



const CommentEditOptions = ({
  id,
  setShowEditForm,
  deleteComment
}) => {

  const [ showMenu, setShowMenu ] = useState(false)

  const onEdit = () => {
    setShowEditForm(true)
    setShowMenu(false)
  }

  const onDelete = () => {
    deleteComment()
  }
 
  return (
    <div className='comment-edit-options'>
      
      <button type='button' id={`comment-edit-options__button`} className='comment-edit-options__button' onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faEllipsisH} className='comment-edit-options__svg' />
      </button>
      

      <OutsideClickNotifier excludeIds={[`comment-edit-options__button`]} sideEffect={() => setShowMenu(false)} >
        <div className={`comment-edit-options__option-menu${showMenu ? '--show' : ''}`}>
      
          <div
            className='comment-edit-options__menu-item'
            onClick={onEdit}>
            <div className='comment-edit-options__menu-edit'>
              Edit
            </div>
          </div>
            
          <div
            className='comment-edit-options__menu-item'
            onClick={onDelete}>
            <div className='comment-edit-options__menu-edit'>
              Delete
            </div>
          </div>
        </div>
      </OutsideClickNotifier>
    </div>
  );
}



export default CommentEditOptions;