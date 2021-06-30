import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import uniqid from 'uniqid'
const CommentForm = ({
  post,
  profile,
  comment,
  author,
  createComment,
  updateComment,
  placeholder,
  formInput,
  parentId,
  setShowEditForm,
  id
  
}) => {

  const formId = uniqid()

  const inputRef = useRef();

  useEffect(() => {
    // $(inputRef.current).focus()
    // $(inputRef.current).val($(inputRef.current).text());
    // console.log('mounting'

      inputRef.current.focus();
      console.log('focusing first')
  }, [])


  useEffect(() => {

    if (post) {

      $(inputRef.current).text(comment ? comment.body : '')
  
      $(inputRef.current).on('keydown', function(e) {  
        if(e.keyCode == 13)
        {
            e.preventDefault();
            const commentText = e.target.innerText;
            if (updateComment) { 
      
            updateComment({ 
              id: comment.id,
              author_id: author.id, 
              post_id: post.id,
              body: commentText,
              parent_id: parentId ? parentId : null
            }).then(() => {
              setShowEditForm(false)
              
            })
          } else if (createComment) {
            
            createComment({ 
              author_id: author.id, 
              post_id: post.id,
              body: commentText,
              parent_id: parentId ? parentId : null
            })
            .then(() => {
              $(this).focus()
            })

            
  
          }
          $(this).empty()
        }
      });
  
      return () => $(inputRef.current).off('keydown')

    }

  }, [post])


  return (
    <form onSubmit={() => console.log('submit')} id={formId} className={`comment-form${!parentId ? '--parent' : ''}`}>
      {
        profile.profilePicUrl ?
          <div
            onClick={() => {}}
            className={`comment-form__profile-image${!parentId ? '--parent' : ''}`}
            style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
          >
          </div>
        : <div className='comment-form__no-img'><FontAwesomeIcon icon={faUser} /></div>
      }

      <div
        id={id}
        ref={inputRef}
        contentEditable
        placeholder={placeholder ? placeholder : "Write a comment..."}
        className='comment-form__input'
      >
      </div>

    </form>

  );
}

export default CommentForm;