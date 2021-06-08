import React, { useState } from 'react';
import PlusCircleIcon from '../../icons/plus_circle';
import ProfileInputForm from './profile_input_form';
import ProfileInputDisplay from './profile_input_display'
import { faHouseUser, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import CurrentUserItem from '../../util/current_user_item_container';



const AboutPlacesDetail = ({
  user,
  profile,
  updateProfile
}) => {


  const [ showCurrentCity, setShowCurrentCity ] = useState(false);
  const [ showHometown, setShowHometown ] = useState(false);

  const AddButton = ({ message, onClick }) => (
    <CurrentUserItem>
      <button onClick={onClick}type='button' className='about-places-detail__add-button'>
        <span className='about-places-detail__add-button-icon'>
          <PlusCircleIcon />
        </span>
        <span className='about-places-detail__add-button-message'>{message}</span>
      </button>
    </CurrentUserItem>
  )

  const showInput = (profile, name, label, placeholder, icon, show, setShow) => {

    return profile[name] && !show ? (
      <div className='about-places-detail__input-display'>
        <ProfileInputDisplay
          name={name}
          value={profile[name]} 
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
      <div className='about-places-detail__input-form'>
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


  return (
    <div className='about-places-detail'>
      <h1 className='about-places-detail__heading'>Places Lived</h1>
      {
        showInput(
          profile, 
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
          'hometown', 
          'Hometown', 
          'Hometown',
          faMapMarkerAlt,
          showHometown,
          setShowHometown
        )
      }
    </div>
  )
}

export default AboutPlacesDetail;