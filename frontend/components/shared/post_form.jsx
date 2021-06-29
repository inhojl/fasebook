import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fetchNewsfeed } from '../../redux/actions/post';


const PostForm = ({
  currentProfile,
  currentUser,
  setShowPostForm,
  createPost,
  updatePost,
  fetchUser,
  editPost,
  setEditPost,
  newsfeed,
  fetchNewsfeed
}) => {


  const [ body, setBody ] = useState('');

  const { userId } = useParams();

  useEffect(() => {
    if (editPost) {
      setBody(editPost.body)
    }
  }, [ editPost ])

  

  const onExitForm = () => {

    setShowPostForm(false)
    $('body').css({
      'position': 'static'
    })
  }

  const onSubmit = () => {
    if (editPost) {
      updatePost({
        id: editPost.id,
        author_id: editPost.authorId,
        wall_id: editPost.wallId,
        body
      })
      .then(() => {
        
        //fetchUser(newsfeed ? currentUser.id : userId)
        setShowPostForm(false)
        setEditPost(null)
      })
    } else {

      createPost({
        author_id: currentUser.id,
        wall_id: userId ? userId : currentUser.id,
        body
      })
      .then(() => {
        if (window.location.pathname === "#/") {
          
          fetchNewsfeed(currentUser.id)
        } else {
          fetchUser(userId ? userId : currentUser.id)
        }
        setShowPostForm(false)
      })
    }

  }

  return (
    <div className='post-form'>
      <header className='post-form__header'>
        <h1 className='post-form__header'>Create Post</h1>
        <span className='post-form__exit-button' onClick={onExitForm}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </header>
      <div className='post-form__divider'></div>
      <div className='post-form__container'>

        <div className='post-form__user-heading'>
          {
            currentProfile.profilePicUrl ?
              <div
                className='post-form__profile-image'
                style={{ backgroundImage: `url(${window.location.origin + currentProfile.profilePicUrl})` }}
              ></div>
          : <div className='post-form__no-img'><FontAwesomeIcon icon={faUser} /></div>
          }
          
          <div className='post-form__user-block'>
            <span className='post-form__user-name'>{currentUser.firstName} {currentUser.lastName}</span>
            <span className='post-form__availability'>
              <FontAwesomeIcon icon={faGlobeAmericas}/>
              <span className='post-form__public'>Public</span>
            </span>
          </div>
        </div>

        <textarea placeholder="What's on your mind?" className='post-form__content' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        <button onClick={onSubmit} type="submit" className='post-form__submit'>{editPost ? "Save" : "Post" }</button>
      </div>
    </div>
  )
}

export default PostForm;
