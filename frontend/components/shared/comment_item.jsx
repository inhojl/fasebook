import React, { useEffect,useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';
import timediff from 'timediff'

const CommentItem = ({
  comments,
  comment,
  author,
  profile,
  users,
  profiles,
  post,
  createComment,
  currentUser
}) => {

  const form = useRef()

  const [showForm, setShowForm] = useState(false)
  const [ triggerFocus, setTriggerFocus ] = useState(false)

  useEffect(() => {

    if (showForm) {
      const $div = $(form.current)
      setTimeout(function() {
          $div.focus();
      }, 0);
    }
  }, [showForm])

  const onClickReply = (e) => {
    setShowForm(true)
  }

  let sortedChildComments;
  if (comment.commentIds.length > 0) {
    const childComments = Object.values(comments).filter(childComment => childComment.parentId === comment.id)
    sortedChildComments = childComments.sort((a, b) => {
      const date1 = new Date(a.createdAt)
      const date2 = new Date(b.createdAt)
      return date1 < date2 ? -1 : 1;
    })


  }


  const commentTimeDiff = (createdAt) => {
    
    const diff = timediff(createdAt, new Date(), 'YWDHmS')

    if (diff.years) {
      return `${diff.years}y`
    } else if (diff.months) {
      return `${diff.months}m`
    } else if (diff.weeks) {
      return `${diff.weeks}w`
    } else if (diff.days) {
      return `${diff.days}d`
    } else if (diff.hours) {
      return `${diff.hours}h`
    } else if (diff.minutes) {
      return `${diff.minutes}m`
    } else if (diff.seconds) {
      return `${diff.seconds}s`
    }

  }


  
  
  


  return (
    <div className='comment-item' >
      <div className='comment-item__parent-comment'>

        <Link className='comment-item__link' to={`/${author.id}`}>
          <div
            style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
            className='comment-item__profile-image'
          >
          </div>
        </Link>

        <div className='comment-item__body-container'>
          <div className='comment-item__body'>
            <div className='comment-item__content-container'>
              <h3 className='comment-item__body-header'>
                {author.firstName} {author.lastName}
              </h3>
              <div className='comment-item__body-content'>
                {comment.body}
              </div>
            </div>
            <div className='comment-item__edit-container'>
              <button type='button' className='comment-item__edit-button'>
                <FontAwesomeIcon className='comment-item__edit-icon' icon={faEllipsisH} />
              </button>
            </div>
          </div>
          <div className='comment-item__options'>
            <span className='comment-item__like'>
              Like
          </span>
          ·
          <span className='comment-item__reply' onClick={onClickReply}>
              Reply
          </span>
          ·
          <span className='comment-item__created-at'>
              {commentTimeDiff(comment.createdAt)}
          </span>
          </div>
        </div>

      </div>

      {
        sortedChildComments ? sortedChildComments.map((childComment, index) =>

        (
          <div key={`child-comment-${index}`} className='comment-item__parent-comment--child'>
            <Link className='comment-item__link--child' to={`/${childComment.authorId}`}>

              <div
                style={{ backgroundImage: `url(${profiles[users[childComment.authorId].profileId] ? window.location.origin + profiles[users[childComment.authorId].profileId].profilePicUrl : ''})` }}
                className='comment-item__profile-image--child'
              ></div>
            </Link>

            <div className='comment-item__body-container'>
              <div className='comment-item__body'>
                <div className='comment-item__content-container'>
                  <h3 className='comment-item__body-header'>
                    {users[childComment.authorId].firstName} {users[childComment.authorId].lastName}
                  </h3>
                  <div className='comment-item__body-content'>
                    {childComment.body}
                  </div>
                </div>
                <div className='comment-item__edit-container'>
                  <button type='button' className='comment-item__edit-button'>
                    <FontAwesomeIcon className='comment-item__edit-icon' icon={faEllipsisH} />
                  </button>
                </div>
              </div>
              <div className='comment-item__options'>
                <span className='comment-item__like'>
                  Like
            </span>
            ·
            <span className='comment-item__reply' onClick={onClickReply}>
                  Reply
            </span>
            ·
            <span className='comment-item__created-at'>
                {commentTimeDiff(childComment.createdAt)}
            </span>
              </div>
            </div>

          </div>
        ))
          : null
      }

      {
        showForm ? 
          <CommentForm
            parentId={comment.id}
            ref={form}
            placeholder='Write a reply...'
            post={post}
            profile={profiles[currentUser.profileId]}
            // comment={}
            author={currentUser}
            createComment={createComment}
          />

        : null
      }


    </div>
  );
}

export default CommentItem;