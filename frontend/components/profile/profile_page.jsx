import React, { useEffect, useState } from 'react';
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

// should get user state

const ProfilePage = ({
  user,
  profile,
  fetchUser,
  currentUserId,
  match,
  relationshipStatuses,
  fetchRelationshipStatuses,
  history,
  updateProfile,
  updateProfileFormData,
  fetchFriends,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest
}) => {
  const [ loading, setLoading ] = useState(false)
  const [showEditDetailsForm, setShowEditDetailsForm] = useState(false);
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);


  useEffect(() => {
    // setLoading(true)
    fetchRelationshipStatuses()
    fetchUser(match.params.userId)
      .then((res) => console.log(res))
      .fail(() => history.push('/'))
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

  return user && profile ? (
    <div className='profile-layout'>

      <header className='profile-layout__header'>
        <ProfileHeader
          updateProfile={updateProfile}
          user={user}
          profile={profile}
          currentUserId={currentUserId}
          setShowEditProfileForm={setShowEditProfileForm}
          updateProfileFormData={updateProfileFormData}
          createFriendRequest={createFriendRequest}
          updateFriendRequest={updateFriendRequest}
          deleteFriendRequest={deleteFriendRequest} />
      </header>

      <main className='profile-layout__main'>
        <Switch>
          <ProtectedRoute exact path={`${match.path}/friends`} component={ProfileFriends} />
          <ProtectedRoute exact path={`${match.path}/about`} component={ProfileAboutContainer} />
          <ProtectedRoute
            relationshipStatuses={relationshipStatuses}
            profile={profile}
            setShowEditDetailsForm={setShowEditDetailsForm}
            exact path={match.path}
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
    </div>
  ) : <div>Loading...</div>;

}

export default ProfilePage;