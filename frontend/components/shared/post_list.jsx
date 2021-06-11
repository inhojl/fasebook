import React, { useEffect } from 'react';
import { createComment, deleteComment } from '../../util/api/comment';
import PostListItem from './post_list_item';

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
  deleteComment
}) => {
  useEffect(() => {
    if (user) fetchPosts(user.id)
  }, [])


  if (wallPosts.some((wallPost => !wallPost))) return null;



  return (

        wallPosts.map((wallPost, index) => (
          <PostListItem
            createComment={createComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            currentUser={currentUser}
            profiles={profiles}
            users={users}
            key={`post-item-${index}`}
            post={ wallPost }
            author={users[wallPost.authorId]}
            profile={profiles[users[wallPost.authorId].profileId]}
            comments={wallPost.commentIds.map((commentId) => comments[commentId] )}
          />
        ))

    
  )
}

export default PostList;
