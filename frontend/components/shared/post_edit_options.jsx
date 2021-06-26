import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import OutsideClickNotifier from './outside_click_notifier';
import { fetchPosts } from '../../util/api/post';



const PostEditOptions = ({
  id,
  setShowPostForm,
  deletePost,
  post,
  fetchPosts,
  setEditPost
}) => {

  const [ showMenu, setShowMenu ] = useState(false)
  const { userId } = useParams();

  const onEdit = () => {
    setEditPost(post)
    setShowPostForm(true)
    setShowMenu(false)
  }

  const onDelete = () => {
    deletePost(post.id)
      .then(() => fetchPosts(userId))
      .then(() => setShowMenu(false))
  }
 
  return (
    <div className='post-edit-options'>
      
      <button type='button' id={`post-edit-options__button`} className='post-edit-options__button' onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faEllipsisH} className='post-edit-options__svg' />
      </button>
      

      <OutsideClickNotifier excludeIds={[`post-edit-options__button`]} sideEffect={() => setShowMenu(false)} >
        <div className={`post-edit-options__option-menu${showMenu ? '--show' : ''}`}>
      
          <div
            className='post-edit-options__menu-item'
            onClick={onEdit}>
            <div className='post-edit-options__menu-edit'>
              Edit
            </div>
          </div>
            
          <div
            className='post-edit-options__menu-item'
            onClick={onDelete}>
            <div className='post-edit-options__menu-edit'>
              Delete
            </div>
          </div>
        </div>
      </OutsideClickNotifier>
    </div>
  );
}



export default PostEditOptions;