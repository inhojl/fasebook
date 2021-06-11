import React, { useState, useEffect, useRef } from 'react'

const CommentForm = React.forwardRef(({
  post,
  profile,
  comment,
  author,
  createComment,
  placeholder,
  formInput,
  parentId
}, ref) => {

  
  useEffect(() => {
    $(".comment-form").on('keydown', '.comment-form__input', function(e) {  
      if(e.keyCode == 13)
      {
          e.preventDefault();
          const comment = e.target.innerText;
          createComment({ 
            author_id: author.id, 
            post_id: post.id,
            body: comment,
            parent_id: parentId ? parentId : null
          })
          $(this).empty()
      }
    });
  }, [])



  return (
    <form className='comment-form'>
      <div
        onClick={() => console.log(form)}
        className='comment-form__profile-image'
        style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
      >
      </div>

      <div
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