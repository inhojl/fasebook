import React, { useState, useEffect } from 'react';
import PlusCircleIcon from '../../icons/plus_circle';
import ProfileInputForm from './profile_input_form';
import ProfileInputDisplay from './profile_input_display'
import AboutRelationshipStatusInput from './about_relationship_status_input';
import { faHeart  } from '@fortawesome/free-solid-svg-icons';
import CurrentUserItem from '../../util/current_user_item_container';




const AboutRelationshipsDetail = ({
  profile,
  updateProfile,
  fetchRelationshipStatuses,
  relationshipStatuses
}) => {

  useEffect(() => {
    fetchRelationshipStatuses()
  }, [])


  const [ showRelationshipStatus, setShowRelationshipStatus ] = useState(false);

  const AddButton = ({ message, onClick }) => (
    <CurrentUserItem>
      <button onClick={onClick}type='button' className='about-relationships-detail__add-button'>
        <span className='about-relationships-detail__add-button-icon'>
          <PlusCircleIcon />
        </span>
        <span className='about-relationships-detail__add-button-message'>{message}</span>
      </button>
    </CurrentUserItem>
  )

  const showInput = (profile, value, name, label, placeholder, icon, show, setShow) => {

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
    <div className='about-relationships-detail'>
      <h1 className='about-relationships-detail__heading'>Relationships</h1>
      {
        showInput(
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

export default AboutRelationshipsDetail;