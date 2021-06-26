import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const PostForm = ({
  currentProfile,
  currentUser
}) => {

  return (
    <div className='post-form'>
      <header className='post-form__header'>
        <h1 className='post-form__header'>Create Post</h1>
        <span className='post-form__exit-button'>
          X
        </span>
      </header>
      <div className='post-form__divider'></div>
      <div className='post-form__container'>

        <div className='post-form__user-heading'>
          <div
            className='post-form__profile-image'
            style={{ backgroundImage: `url(${window.location.origin + currentProfile.profilePicUrl})` }}
          ></div>
          <div className='post-form__user-block'>
            <span className='post-form__user-name'>{currentUser.firstName} {currentUser.lastName}</span>
            <span className='post-form__availability'>
              <FontAwesomeIcon icon={faGlobeAmericas}/>
              <span className='post-form__public'>Public</span>
            </span>
          </div>
        </div>

        <textarea placeholder="What's on your mind?" className='post-form__content'></textarea>
        <button type="submit" className='post-form__submit'>Post</button>
      </div>
    </div>
  )
}

export default PostForm;
