import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { createComment, deleteComment } from '../../util/api/comment';
import PostListItem from './post_list_item';
import uniqid from 'uniqid'

const PostList = ({
  user,
  currentUser,
  users,
  wallPosts,
  comments,
  fetchPosts,
  profiles,
  createComment,
  updateComment,
  deleteComment,
  updatePost,
  deletePost,
  setShowPostForm,
  setEditPost,
  fetchUser
}) => {

  const { userId } = useParams();

  
  useEffect(() => {
    if (userId) fetchPosts(userId)
  }, [userId])
  
  
  
  
  if (wallPosts.some((wallPost => !wallPost))) return null;
  const descendingWallPosts = wallPosts.sort((a, b) => {
    const date1 = new Date(a.createdAt)
    const date2 = new Date(b.createdAt)
    return date1 > date2 ? -1 : 1;
  })


  return (

        descendingWallPosts.slice().map((wallPost, index) => (
          <PostListItem
            setEditPost={setEditPost}
            fetchPosts={fetchPosts}
            updatePost={updatePost}
            deletePost={deletePost}
            createComment={createComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            setShowPostForm={setShowPostForm}
            currentUser={currentUser}
            profiles={profiles}
            users={users}
            key={`post-item-${uniqid()}`}
            post={ wallPost }
            author={users[wallPost.authorId]}
            profile={profiles[users[wallPost.authorId].profileId]}
            comments={wallPost.commentIds.map((commentId) => comments[commentId] )}
            fetchUser={fetchUser}
          />
        ))

    
  )
}

export default PostList;
