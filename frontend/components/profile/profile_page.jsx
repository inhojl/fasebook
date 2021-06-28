import React, { useEffect, useState, useParams } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route'
import { CSSTransition } from 'react-transition-group';
import ProfileHeader from './profile_header';
import ProfilePosts from './profile_posts';
import ProfileAboutContainer from './profile_about_container';
import ProfileFriends from './profile_friends';
import EditDetailsForm from './edit_details_form';
import EditProfileForm from './edit_profile_form';
import OutsideClickNotifier from '../shared/outside_click_notifier';
import PostForm from '../shared/post_form';

// should get user state

const ProfilePage = ({
  user,
  profile,
  fetchUser,
  match,
  relationshipStatuses,
  fetchRelationshipStatuses,
  history,
  updateProfile,
  updateProfileFormData,
  fetchFriends,
  currentUserId,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest,
  users,
  profiles,
  createPost,
  deletePost,
  updatePost
}) => {
  console.log(user)
  const [ loading, setLoading ] = useState(false)
  const [showEditDetailsForm, setShowEditDetailsForm] = useState(false);
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  
  const [ editPost, setEditPost ] = useState(null);

  console.log(match.params.userId)

  useEffect(() => {
    // setLoading(true)
    fetchRelationshipStatuses()

    fetchUser(match.params.userId)
      .then((res) => console.log(res))
      .fail(() => {
        console.log('failing')
        if (match.path !== '/friends') history.push('/')
      })
      // .always(() => setLoading(false))
  }, [match.params.userId])


  const onEditDetailsExit = () => {
    setShowEditDetailsForm(false)
    $('body').css({
      'position': 'static'
    })
  }

  const onEditProfileExit = () => {
    setShowEditProfileForm(false)
    $('body').css({
      'position': 'static'
    })
  }


  const onPostFormExit = () => {
    setShowPostForm(false)
    $('body').css({
      'position': 'static'
    })
  }

  return user && profile ? (
    <div className='profile-layout'>

      <header className='profile-layout__header'>
        <ProfileHeader
          match={match}
          updateProfile={updateProfile}
          user={user}
          profile={profile}
          currentUserId={currentUserId}
          setShowEditProfileForm={setShowEditProfileForm}
          updateProfileFormData={updateProfileFormData}
          createFriendRequest={createFriendRequest}
          updateFriendRequest={updateFriendRequest}
          deleteFriendRequest={deleteFriendRequest}
          
          fetchUser={fetchUser} />
      </header>

      <main className='profile-layout__main'>
        <Switch>
          <ProtectedRoute 
            createFriendRequest={createFriendRequest}
            updateFriendRequest={updateFriendRequest}
            deleteFriendRequest={deleteFriendRequest}
            currentUserId={currentUserId}
            user={user} 
            fetchFriends={fetchFriends} 
            users={users} 
            profiles={profiles} 
            exact path={`${match.path}/friends`} 
            component={ProfileFriends} />
          <ProtectedRoute exact path={`${match.path}/about`} match={match} component={ProfileAboutContainer} />
          <ProtectedRoute
            relationshipStatuses={relationshipStatuses}
            profile={profile}
            setEditPost={setEditPost}
            user={user}
            currentUserId={currentUserId}
            setShowEditDetailsForm={setShowEditDetailsForm}
            setShowPostForm={setShowPostForm}
            exact path={match.path}
            setShowPostForm={setShowPostForm}
            component={ProfilePosts} />
          <Redirect exact to={match.path} />
        </Switch>
      </main>

      <CSSTransition
        in={showEditDetailsForm}
        timeout={200}
        classNames='js-show-modal'
        unmountOnExit
        onEnter={() => setShowEditDetailsForm(true)}
        onExited={onEditDetailsExit}
      >
        <div className='splash-layout__modal'>
          <div className='splash-layout__modal-top-guard'>
            <div className='splash-layout__modal-center'>
              <OutsideClickNotifier excludeIds={[]} sideEffect={() => setShowEditDetailsForm(false)}>
                <EditDetailsForm
                  setShowEditDetailsForm={setShowEditDetailsForm}
                  profile={profile}
                  updateProfile={updateProfile}
                  relationshipStatuses={relationshipStatuses}
                  fetchRelationshipStatuses={fetchRelationshipStatuses} />
              </OutsideClickNotifier>

            </div>
          </div>
          <div className='splash-layout__modal-background'></div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showEditProfileForm}
        timeout={200}
        classNames='js-show-modal'
        unmountOnExit
        onEnter={() => setShowEditProfileForm(true)}
        onExited={onEditProfileExit}
      >
        <div className='splash-layout__modal'>
          <div className='splash-layout__modal-top-guard'>
            <div className='splash-layout__modal-center'>
              <OutsideClickNotifier excludeIds={[]} sideEffect={() => setShowEditProfileForm(false)}>
                <EditProfileForm
                  user={user}
                  updateProfileFormData={updateProfileFormData}
                  setShowEditProfileForm={setShowEditProfileForm}
                  profile={profile}
                  updateProfile={updateProfile}
                  relationshipStatuses={relationshipStatuses}
                  fetchRelationshipStatuses={fetchRelationshipStatuses} />
              </OutsideClickNotifier>
            </div>
          </div>
          <div className='splash-layout__modal-background'></div>
        </div>
      </CSSTransition>


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
                  editPost={editPost}
                  setEditPost={setEditPost}
                  currentProfile={profiles[users[currentUserId].profileId]}
                  currentUser={users[currentUserId]}
                  setShowPostForm={setShowPostForm}
                  createPost={createPost}
                  updatePost={updatePost}
                  fetchUser={fetchUser}
                  />
              </OutsideClickNotifier>
            </div>
          </div>
          <div className='splash-layout__modal-background'></div>
        </div>
      </CSSTransition>
    </div>

  ) : <div>Loading...</div>;

}

export default ProfilePage;