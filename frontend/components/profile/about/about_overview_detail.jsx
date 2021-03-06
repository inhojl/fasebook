import React, { useState, useEffect } from 'react';
import PlusCircleIcon from '../../icons/plus_circle';
import ProfileInputForm from './profile_input_form';
import ProfileInputDisplay from './profile_input_display'
import CurrentUserItem from '../../util/current_user_item_container';
import { faHouseUser, faMapMarkerAlt, faHeart  } from '@fortawesome/free-solid-svg-icons';
import AboutRelationshipStatusInput from './about_relationship_status_input';


const AboutOverviewDetail = ({
  profile,
  updateProfile,
  relationshipStatuses,
  fetchRelationshipStatuses
}) => {

  useEffect(() => {
    fetchRelationshipStatuses()
  }, [])


  const [ showCurrentCity, setShowCurrentCity ] = useState(false);
  const [ showHometown, setShowHometown ] = useState(false);
  const [ showRelationshipStatus, setShowRelationshipStatus ] = useState(false);

  const AddButton = ({ message, onClick }) => (
    <CurrentUserItem>
      <button onClick={onClick}type='button' className='about-overview-detail__add-button'>
        <span className='about-overview-detail__add-button-icon'>
          <PlusCircleIcon />
        </span>
        <span className='about-overview-detail__add-button-message'>{message}</span>
      </button>
    </CurrentUserItem>
  )

  const showInput = (profile, value, name, label, placeholder, icon, show, setShow) => {

    return profile[name] && !show ? (
      <div className='about-overview-detail__input-display'>
        <ProfileInputDisplay
          name={name}
          value={value || profile[name]} 
          label={label}
          icon={icon}
          updateProfile={updateProfile}
          setShow={setShow}
          profile={profile} 
          showDelete
          showEdit
          />
      </div>
    ) : (
      show ?
      <div className='about-overview-detail__input-form'>
        <ProfileInputForm
          profile={profile}
          onCancel={() => setShow(false)} 
          name={name}
          placeholder={placeholder}
          updateProfile={updateProfile}
        />
      </div>
    : <AddButton onClick={() => setShow(true)} message={`Add ${label.toLowerCase()}`} />
    )
  }


  const showRelationshipStatusInput = (profile, value, name, label, placeholder, icon, show, setShow) => {

    return profile[name] && !show ? (
      <div className='about-relationships-detail__input-display'>
        <ProfileInputDisplay
          name={name}
          value={value || profile[name]} 
          label={label}
          icon={icon}
          updateProfile={updateProfile}
          setShow={setShow}
          profile={profile}
          showDelete
          showEdit />
      </div>
    ) : (
      show ?
      <div className='about-relationships-detail__input-form'>
        <AboutRelationshipStatusInput
          profile={profile}
          onCancel={() => setShow(false)} 
          name={name}
          placeholder={placeholder}
          updateProfile={updateProfile}
          relationshipStatuses={relationshipStatuses}
          errors={[]}
        />
      </div>
    : <AddButton onClick={() => setShow(true)} message={`Add ${label.toLowerCase()}`} />
    )
  }

  return (
    <div className='about-overview-detail'>
      <h1 className='about-overview-detail__heading'>Overview</h1>
      {
        showInput(
          profile,
          null,
          'currentCity', 
          'Current city', 
          'Current City',
          faHouseUser,
          showCurrentCity,
          setShowCurrentCity
          )
      }
      {
        showInput(
          profile,
          null,
          'hometown', 
          'Hometown', 
          'Hometown',
          faMapMarkerAlt,
          showHometown,
          setShowHometown
        )
      }
      {
        showRelationshipStatusInput(
          profile,
          relationshipStatuses[profile.relationshipStatusId] ? relationshipStatuses[profile.relationshipStatusId].label : '',
          'relationshipStatusId', 
          'Relationship status', 
          'Relationship Status',
          faHeart,
          showRelationshipStatus,
          setShowRelationshipStatus
        )
      }

    </div>
  )
}

export default AboutOverviewDetail;