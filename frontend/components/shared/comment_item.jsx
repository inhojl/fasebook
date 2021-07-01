import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';
import timediff from 'timediff'
import CommentEditOptions from './comment_edit_options'
import uniqid from 'uniqid'
import ParentCommentItem from './parent_comment_item';
import ChildCommentItem from './child_comment_item';

const CommentItem = ({
  comments,
  comment,
  author,
  profile,
  users,
  profiles,
  post,
  createComment,
  deleteComment,
  updateComment,
  currentUser,
  createLike,
  deleteLike
}) => { 


  const form = useRef()

  const [showForm, setShowForm] = useState(false);
  useEffect(() => {

    if (showForm) {
      const $div = $(form.current)
      setTimeout(function () {
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

  return (
    <div className='comment-item'>

      <ParentCommentItem 
        createComment={createComment}
        author={author}
        profile={profile}
        onClickReply={onClickReply}
        comment={comment}
        profiles={profiles}
        currentUser={currentUser}
        updateComment={updateComment}
        deleteComment={deleteComment}
        post={post}
        createLike={createLike}
        deleteLike={deleteLike}
        users={users}
      />

      {
        sortedChildComments ? sortedChildComments.map((childComment, index) => 
            <ChildCommentItem
            key={`comment-item-${index}`}
            author={users[childComment.authorId]}
            profile={profiles[users[childComment.authorId].profileId]}
            onClickReply={onClickReply}
            comment={childComment}
            profiles={profiles}
            currentUser={currentUser}
            updateComment={updateComment}
            deleteComment={deleteComment}
            post={post}
            createLike={createLike}
            deleteLike={deleteLike}
            users={users}
            />
        ) 
        : null
      }

      {
        showForm ?
          <CommentForm
            id={uniqid()}
            parentId={comment.id}
            placeholder='Write a reply...'
            post={post}
            profile={profiles[currentUser.profileId]}
            author={currentUser}
            createComment={createComment}
          />
          : null
      }


    </div>
  );
}

export default CommentItem;