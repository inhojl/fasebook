import React, { useState } from 'react';
import NewsfeedListContainer from './newsfeed_list_container'
import OutsideClickNotifier from '../shared/outside_click_notifier';
import { CSSTransition } from 'react-transition-group';
import ProfileCreatePost from '../profile/profile_create_post';
import Loader from '../util/loader'

import PostForm from '../shared/post_form';

const NewsfeedPage = ({

  fetchUser,
  currentUserId,
  users,
  profiles,
  createPost,
  updatePost,
  newsfeed,
  fetchNewsfeed
}) => {
  
  const [ showPostForm, setShowPostForm] = useState(false);
  const [ editPost, setEditPost ] = useState(null);
  
  const onPostFormExit = () => {
    setShowPostForm(false)
    $('body').css({
      'position': 'static'
    })
  }

  return (
    <div className='newsfeed-layout'>
      <div className='newsfeed-layout__background'></div>
      <div className='newsfeed-layout__container'>
          <section className='newsfeed-layout__summary'>
          
          </section>
          <section className='newsfeed-layout__wall'>
            <ProfileCreatePost profile={{}} user={{}} newsfeed={newsfeed} setShowPostForm={setShowPostForm} currentUser={users[currentUserId]} currentUserProfile={profiles[users[currentUserId].profileId]} />
            <NewsfeedListContainer setEditPost={setEditPost} setShowPostForm={setShowPostForm} />
          </section>
      </div>

      <CSSTransition
        in={showPostForm}
        timeout={200}
        classNames='js-show-modal'
        unmountOnExit
        onEnter={() => setShowPostForm(true)}
        onExited={onPostFormExit}
      >
        <div className='splash-layout__modal'>
          <div className='splash-layout__modal-top-guard'>
            <div className='splash-layout__modal-center'>
              <OutsideClickNotifier excludeIds={[]} sideEffect={() => setShowPostForm(false)}>
                <PostForm
                  newsfeed={newsfeed}
                  editPost={editPost}
                  setEditPost={setEditPost}
                  currentProfile={profiles[users[currentUserId].profileId]}
                  currentUser={users[currentUserId]}
                  setShowPostForm={setShowPostForm}
                  createPost={createPost}
                  updatePost={updatePost}
                  fetchUser={fetchUser}
                  fetchNewsfeed={fetchNewsfeed}
                  user={editPost ? users[editPost.wallId] : {}}
                  />
              </OutsideClickNotifier>
            </div>
          </div>
          <div className='splash-layout__modal-background'></div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NewsfeedPage;