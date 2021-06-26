import React, { useState, useEffect, useRef } from 'react'
import uniqid from 'uniqid'
const CommentForm = React.forwardRef(({
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
  
}, ref) => {

  const formId = uniqid()


  useEffect(() => {


    $(`#${id}`).text(comment ? comment.body : '')

    $(`#${id}`).on('keydown', function(e) {  
      if(e.keyCode == 13)
      {
          e.preventDefault();
          const commentText = e.target.innerText;
          if (updateComment) { 
            console.log('updating',comment)
          updateComment({ 
            id: comment.id,
            author_id: author.id, 
            post_id: post.id,
            body: commentText,
            parent_id: parentId ? parentId : null
          }).then(() => {
            if (setShowEditForm) {
              setShowEditForm(false)
            }
          })
        } else if (createComment) {
          console.log('WHATs- going on', { 
            author_id: author.id, 
            post_id: post.id,
            body: commentText,
            parent_id: parentId ? parentId : null
          })
          createComment({ 
            author_id: author.id, 
            post_id: post.id,
            body: commentText,
            parent_id: parentId ? parentId : null
          }) 

        }
          
          $(this).empty()
      }
    });

    return () => $(`#${id}`).off('keydown')
  }, [post])



  return (
    <form id={formId} className={`comment-form${!parentId ? '--parent' : ''}`}>
      <div
        onClick={() => {}}
        className={`comment-form__profile-image${!parentId ? '--parent' : ''}`}
        style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
      >
      </div>

      <div
        id={id}
        ref={ref}
        contentEditable
        placeholder={placeholder ? placeholder : "Write a comment..."}
        className='comment-form__input'
      >
      </div>

    </form>

  );
})

export default CommentForm;