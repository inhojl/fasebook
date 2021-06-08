import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route'
import { CSSTransition } from 'react-transition-group';
import ProfileHeader from './profile_header';
import ProfilePosts from './profile_posts';
import ProfileAboutContainer from './profile_about_container';
import ProfileFriends from './profile_friends';
import EditDetailsForm from './edit_details_form';
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
  updateProfile,
}) => {

  console.log('profile page', match.path)
  const [ showEditDetailsForm, setShowEditDetailsForm] = useState(false);


  useEffect(() => {
    // check for user
      // if user is legit
        // pull all user information
      // else
      // history.push("/")
      fetchRelationshipStatuses()
      fetchUser(match.params.userId)
        .fail(() => history.push('/'))
  }, [])
  

  return user && profile ? (
    <div className='profile-layout'>
      <header className='profile-layout__header'>
        <ProfileHeader 
          updateProfile={updateProfile} 
          user={user} 
          profile={profile} /> 
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
        onExited={() => setShowEditDetailsForm(false)}
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
    </div>
  ) : null;

}

export default ProfilePage;