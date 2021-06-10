import React, { useState } from 'react';
import ProfileIntro from './profile_intro';
import ProfileFriendsSummaryContainer from './profile_friends_summary_container';
import ProfileCreatePost from './profile_create_post';
import ProfilePostFilter from './profile_post_filter';
import ProfilePostList from './profile_post_list';

const ProfilePosts = ({ profile, relationshipStatuses, setShowEditDetailsForm }) => {

  const [ loaded, setLoaded ] = useState(false)
 

  return (
    <section className='profile-posts-layout'>
      <div className='profile-posts-layout__container'>
        <section className='profile-posts-layout__summary'>
          <ProfileIntro 
            relationshipStatuses={relationshipStatuses} 
            profile={profile}
            setShowEditDetailsForm={setShowEditDetailsForm} />
          <ProfileFriendsSummaryContainer loaded={loaded} setLoaded={setLoaded} />
        </section>
        <section className='profile-posts-layout__wall'>
          <ProfileCreatePost profile={profile} />
          <ProfilePostFilter />
          <ProfilePostList />
        </section>
      </div>
    </section>
  )

}

export default ProfilePosts;