import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUser, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';
import timediff from 'timediff'
import CommentEditOptions from './comment_edit_options'
import CurrentUserItem from '../util/current_user_item_container';
import uniqid from 'uniqid'

const ChildCommentItem = ({
  author,
  profile,
  comment,
  onClickReply,
  profiles,
  currentUser,
  updateComment,
  deleteComment,
  post,
  deleteLike,
  createLike
}) => {
  const [ showEditForm, setShowEditForm] = useState(false)

 

  const commentTimeDiff = (createdAt) => {

    const diff = timediff(createdAt, new Date(), 'YWDHmS')

    if (diff.years) {
      return `${diff.years}y`
    } else if (diff.months) {
      return `${diff.months}mo`
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
    } else {
      return `0s`
    }

  }


  const onLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const like = {
      likeable_type: 'Comment',
      likeable_id: comment.id,
      liker_id: currentUser.id
    }
    if (comment.liked) {
      deleteLike(like)
    } else {
      createLike(like)
    }
  }


  return !showEditForm ? (
    <div className='comment-item__parent-comment--child'>
      <Link className='comment-item__link--child' to={`/${comment.authorId}`}>
        {
          profile && profile.profilePicUrl ?
            <div
              style={{ backgroundImage: `url(${profile ? window.location.origin + profile.profilePicUrl : ''})` }}
              className='comment-item__profile-image--child'
            ></div>
          : <div className='comment-item__no-img'><FontAwesomeIcon icon={faUser} /></div>
        }
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
          {
            comment.likeCount ?
            <div className='comment-item__like-count'>
                <span className='comment-item__like-count-wrapper'>
                  <span className='comment-item__like-icon-wrapper'><FontAwesomeIcon icon={faThumbsUp} /></span>
                  <span className='comment-item__like-num'>{comment.likeCount}</span>
                </span>
            </div>
            : null
          }
            {
              comment.authorId === currentUser.id || post.wallId == currentUser.id ?
              <div className='comment-item__edit-container'>
                <CommentEditOptions
                  id={uniqid()}
                  setShowEditForm={setShowEditForm}
                  deleteComment={() => deleteComment(comment.id)}
                  post={post}
                  currentUser={currentUser}
                  comment={comment}
                />
              </div>
              : null
            }
        </div>
        <div className='comment-item__options'>
          <span className={`comment-item__like${comment.liked ? '--liked' : ''}`} onClick={onLike}>
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
  ) : <CommentForm
  id={uniqid()}
  placeholder='Write a reply...'
  post={post}
  profile={profiles[currentUser.profileId]}
  comment={comment}
  author={currentUser}
  updateComment={updateComment}
  setShowEditForm={setShowEditForm}
  parentId={comment.parentId}
/>
}

export default ChildCommentItem;