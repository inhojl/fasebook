import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutHeader from './about/about_header';
import AboutOverviewDetail from './about/about_overview_detail';
import AboutPlacesDetail from './about/about_places_detail';
import AboutContactAndBasicInfoDetail from './about/about_contact_and_basic_info_detail'
import AboutRelationshipsDetail from './about/about_relationships_detail';

const ProfileAbout = ({ 
  user, 
  profile, 
  currentUserId, 
  fetchProfile, 
  updateProfile,
  updateUser,
  location, 
  fetchRelationshipStatuses,
  relationshipStatuses,
  match
}) => {



  const params = new URLSearchParams(location.search);
  const section = params.get('section')
  let AboutDetail;
  if (section === 'places') {
    AboutDetail = AboutPlacesDetail;
  } else if (section === 'contact_and_basic_info') {
    AboutDetail = AboutContactAndBasicInfoDetail;
  } else if (section === 'relationships') {
    AboutDetail = AboutRelationshipsDetail;
  } else {
    AboutDetail = AboutOverviewDetail
  }

  return (
    <div className='profile-about-layout'>
      <div className='profile-about-layout__container'>
        <AboutHeader match={match} user={user} />
        <AboutDetail
          user={user}
          profile={profile}
          fetchProfile={fetchProfile}
          updateProfile={updateProfile}
          updateUser={updateUser}
          fetchRelationshipStatuses={fetchRelationshipStatuses}
          relationshipStatuses={relationshipStatuses}
        />
      </div>
    </div>
  )

}

export default ProfileAbout;