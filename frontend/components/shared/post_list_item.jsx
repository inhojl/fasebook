import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsisH, faUser, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as emptyThumbsUp, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import PostEditOptions from './post_edit_options';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
import CurrentUserItem from '../util/current_user_item_container';
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
  deleteComment,
  updatePost,
  deletePost,
  setShowPostForm,
  fetchPosts,
  setEditPost,
  fetchUser,
  newsfeed,
  fetchNewsfeed,
  user
}) => {

  const [ showComments, setShowComments ] = useState(true)
  const { userId: userIdFromParams } = useParams();

  
  const parentComments = comments.filter((comment) => comment.parentId === null);
  const sortedParentComments = parentComments.sort((a, b) => {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date1 < date2 ? -1 : 1;
  })
  

  const dateModifier = (createdAt) => {
    const diff = timediff(createdAt, new Date(), 'YWDHmS')
    if (diff.weeks || diff.months || diff.years) {
      return '';
    }
    else {
      return '--recent'
    }
    
  }
  

  const postTimeDiff = (createdAt) => {

    const diff = timediff(createdAt, new Date(), 'YWDHmS')

    if (diff.years || diff.months || diff.weeks > 2) {
      return moment(new Date(createdAt)).format("MMMM D, YYYY")
    } else if (diff.weeks) {
    
      return moment(new Date(createdAt)).format("MMMM D, YYYY [at] LT")
    } else if (diff.days) {
      return `${diff.days}d`
    } else if (diff.hours) {
      return `${diff.hours}h`
    } else if (diff.minutes) {
      return `${diff.minutes}m`
    } else if (diff.seconds) {
      return `${diff.seconds}s`
    } else {
      return `0s`;
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
{/* 
        { 
                post.authorId !== post.wallId ?
                <>
                  {" "}<FontAwesomeIcon icon={faCaretRight} /> {users[post.wallId].firstName + " " + users[post.wallId].lastName}
                </>
                : null
              } */}
          <div className='post-list-item__name-wrapper'>
            <Link to={`/${author.id}`}>
              <span className='post-list-item__name'>
                {author.firstName} {author.lastName}
              </span>
            </Link>
            {
              post.authorId !== post.wallId ?
              <>
              <FontAwesomeIcon icon={faCaretRight} className='post-list-item__name-seperator' /> 
              <Link to={`/${post.wallId}`}>
                <span className='post-list-item__name'>
                {users[post.wallId].firstName + " " + users[post.wallId].lastName}
                </span>
              </Link>
              </>
              : null
            }

          </div>
          <span className={`post-list-item__date${dateModifier(post.createdAt)}`}>
            { postTimeDiff(post.createdAt) }
          </span>
        </div>
          {
            post && currentUser && (post.authorId == currentUser.id || post.wallId == currentUser.id) ?
            <div className='post-list-item__options'>
              <PostEditOptions
                setEditPost={setEditPost}
                post={post}
                updatePost={updatePost}
                deletePost={deletePost}
                setShowPostForm={setShowPostForm}
                fetchPosts={fetchPosts}
                fetchUser={fetchUser}
                newsfeed={newsfeed}
                fetchNewsfeed={fetchNewsfeed}
                currentUser={currentUser}
              />
            </div>
            : null
          }
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
      { showComments ? <div className='post-list-item__divider'></div> : null }
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
        (showComments && comments.length > 0) || (comments.length === 0) &&
        (post.authorId && currentUser && (post.authorId === currentUser.id || users[post.authorId].friendshipStatus === 'FRIENDS')) ?
        
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
