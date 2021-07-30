import React, { useState, useEffect } from 'react';
import NewsfeedListContainer from './newsfeed_list_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'
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

  const [showPostForm, setShowPostForm] = useState(false);
  const [editPost, setEditPost] = useState(null);


  const onPostFormExit = () => {
    setShowPostForm(false)
    $('body').css({
      'position': 'static'
    })
  }

  return (
    <div className='newsfeed-layout'>
      <div className='newsfeed-layout__background'></div>
      <div className='newsfeed-layout__personal-links'>
        <ul className='newsfeed-layout__personal-links-list'>
          <li className='newsfeed-layout__personal-link-item'>
            <a href='#' target='_blank'>
              <div className='newsfeed-layout__personal-photo-wrapper'>
                <div
                  className='newsfeed-layout__personal-photo'
                  style={{ backgroundImage: `url(${window.personalPic})` }}
                ></div>
              </div>
              <span className='newsfeed-layout__personal-label'>
                Inho Lee
              </span>
            </a>

          </li>
          <li className='newsfeed-layout__personal-link-item'>
            <a href='https://github.com/inhojl' target='_blank'>
              <div className='newsfeed-layout__github'>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <span className='newsfeed-layout__personal-label'>
                GitHub
              </span>
            </a>
          </li>
          <li className='newsfeed-layout__personal-link-item'>
            <a href='https://linkedin.com/in/inhojl' target='_blank'>
              <div className='newsfeed-layout__linkedin'>
                <FontAwesomeIcon icon={faLinkedin} />

              </div>
              <span className='newsfeed-layout__personal-label'>
                LinkedIn
                </span>
            </a>
          </li>
          <li className='newsfeed-layout__personal-link-item'>
            <a href='#' target='_blank'>
              <div className='newsfeed-layout__angelist'>
                <FontAwesomeIcon icon={faAngellist} />

              </div>
              <span className='newsfeed-layout__personal-label'>
                AngelList
              </span>

            </a>

          </li>
        </ul>
      </div>
      <div className='newsfeed-layout__container'>
        <section className='newsfeed-layout__summary'>
        </section>
        <section className='newsfeed-layout__wall'>
          <ProfileCreatePost profile={{}} user={{}} newsfeed={newsfeed} setShowPostForm={setShowPostForm} currentUser={users[currentUserId]} currentUserProfile={profiles[users[currentUserId].profileId]} />
          <NewsfeedListContainer setEditPost={setEditPost} setShowPostForm={setShowPostForm} />
        </section>
      </div>
      <div className='newsfeed-layout__personal-projects'>
        <h1 className='newsfeed-layout__personal-projects-heading'>
          Other Projects
        </h1>

        <a href='https://wizrd.herokuapp.com' target='_blank' className='newsfeed-layout__personal-project-item'>

            <div
              className='newsfeed-layout__wizrd'
              style={{ backgroundImage: `url(${window.wizrdPic})` }}
            ></div>
    
        </a>

        <a href='https://avatar-chat.herokuapp.com' target='_blank' className='newsfeed-layout__personal-project-item'>
            <div
              className='newsfeed-layout__chat'
              style={{ backgroundImage: `url(${window.chatPic})` }}
            ></div>
            <span className='newsfeed-layout__chat-label'>
              Chat with 3D Avatars!
              <span className='newsfeed-layout__chat-site'>
                avatar-chat.heroku...
              </span>
            </span>
        </a>

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