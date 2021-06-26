import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as emptyThumbsUp, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
import moment from 'moment'
import timediff from 'timediff'
import uniqid from 'uniqid';

const PostListItem = ({
  author,
  comments,
  post,
  profile,
  users,
  profiles,
  currentUser,
  createComment,
  updateComment,
  deleteComment
}) => {

  const [ showComments, setShowComments ] = useState(true)

 
  
  const parentComments = comments.filter((comment) => comment.parentId === null);
  const sortedParentComments = parentComments.sort((a, b) => {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date1 < date2 ? -1 : 1;
  })
  

  const dateModifier = (createdAt) => {
    const diff = timediff(createdAt, new Date(), 'YWDHmS')
    if (diff.hours || diff.minutes || diff.seconds) {
      return '--recent'
    }
    return '';
  }
  

  const postTimeDiff = (createdAt) => {

    const diff = timediff(createdAt, new Date(), 'YWDHmS')

    if (diff.years || diff.months || diff.weeks > 2) {
      return moment(new Date(post.createdAt)).format("MMMM D, YYYY")
    } else if (diff.weeks || diff.days) {
      {moment(new Date(post.createdAt)).format("MMMM D, YYYY [at] LT")}
    } else if (diff.hours) {
      return `${diff.hours}h`
    } else if (diff.minutes) {
      return `${diff.minutes}m`
    } else if (diff.seconds) {
      return `${diff.seconds}s`
    }
 
  }


  return (
    <div className='post-list-item'>
      <div className='post-list-item__header'>
        <Link to={`/${author.id}`}>
          {
            profile.profilePicUrl ?
              <div 
                className='post-list-item__profile-image'
                style={{ backgroundImage: `url(${window.location.origin + profile.profilePicUrl})` }}
              ></div>
            : <div className='post-list-item__no-img'><FontAwesomeIcon icon={faUser} /></div>
          }
        </Link>
        <div className='post-list-item__heading'>
          <Link to={`/${author.id}`}>
            <span className='post-list-item__name'>
              {author.firstName} {author.lastName}
            </span>
          </Link>
          <span className={`post-list-item__date${dateModifier(post.createdAt)}`}>
            { postTimeDiff(post.createdAt) }
          </span>
        </div>
        <div className='post-list-item__options'>
          <div className='post-list-item__options-button'>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      </div>

      <div className='post-list-item__body'>
        {post.body}
      </div>
      {
        comments.length > 0 ?
          <span className='post-list-item__comment-count' onClick={() => setShowComments(!showComments)}>
            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
          </span>
        : <div className='post-list-item__padding'></div>
      }
     

      <div className='post-list-item__divider'></div>

      <div className='post-list-item__button-group'>
        <div className='post-list-item__post-like'>
          <span className='post-list-item__like-icon'>
            <FontAwesomeIcon icon={emptyThumbsUp} />
          </span>
          <span className='post-list-item__label'>
            Like
          </span>
        </div>
        <div className='post-list-item__post-comment'>
          <span className='post-list-item__comment-icon'>
            <FontAwesomeIcon icon={faCommentAlt} />
          </span>
          <span className='post-list-item__label'>
            Comment
          </span>
        </div>
      </div>
      <div className='post-list-item__divider'></div>
      {
        showComments && comments.length > 0 ?
        <div className='post-list-item__comments-container'>

          {sortedParentComments.map((comment) => (
            <CommentItem
              currentUser={currentUser}
              comments={comments}
              key={`comment-${comment.id}`}
              post={post}
              author={users[comment.authorId]}
              comment={comment}
              profile={profiles[users[comment.authorId].profileId]}
              createComment={createComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              profiles={profiles}
              users={users}
            
            />
          ))}
        </div>
        : null
      }

      {
        (showComments && comments.length > 0) || (comments.length === 0) ?
        
        <div className='post-list-item__comment-form'>
            <CommentForm 
              id={uniqid()}
              post={post}
              author={currentUser} 
              profile={profiles[currentUser.profileId]}
              createComment={createComment} />
          </div>
          : null
      }

    
    </div>
  )
}

export default PostListItem;