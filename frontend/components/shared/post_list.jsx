import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../util/loader';

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
  fetchUser,
  newsfeed,
  fetchNewsfeed,
  newsfeedPosts,
  createLike,
  deleteLike
}) => {

  const { userId } = useParams();
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    if (newsfeed) {
      fetchNewsfeed(currentUser.id)
        .then(() => setLoaded(true))
    }
  }, [])
  
  useEffect(() => {

    if (!newsfeed) {
      if (userId) fetchPosts(userId).then(() => setLoaded(true))
    }
    
  }, [userId])
  
  
  let descendingPosts;

  if (newsfeed) {
    if (newsfeedPosts.some((newsfeedPost => !newsfeedPost))) return <Loader />;
      descendingPosts = newsfeedPosts.sort((a, b) => {
      const date1 = new Date(a.createdAt)
      const date2 = new Date(b.createdAt)
      return date1 > date2 ? -1 : 1;
    })
    
  } else {
    if (wallPosts.some((wallPost => !wallPost))) return <Loader />;
      descendingPosts = wallPosts.sort((a, b) => {
      const date1 = new Date(a.createdAt)
      const date2 = new Date(b.createdAt)
      return date1 > date2 ? -1 : 1;
    })
  }
  


  return (
      
        loaded ? 
        descendingPosts.slice().map((post, index) => (
          <PostListItem
            user={user}
            fetchNewsfeed={fetchNewsfeed}
            newsfeed={newsfeed}
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
            post={ post }
            author={users[post.authorId]}
            profile={profiles[users[post.authorId].profileId]}
            comments={post.commentIds.map((commentId) => comments[commentId] )}
            fetchUser={fetchUser}
            createLike={createLike}
            deleteLike={deleteLike}
          />
        ))
        : <Loader />
      

    
  )
}

export default PostList;
