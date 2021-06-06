import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faMapMarkerAlt, faHeart  } from '@fortawesome/free-solid-svg-icons';


const ProfileIntroItem = ({ type, prefix, value }) => {

  let icon;
  switch(type) {
    case 'currentCity':
      icon = <FontAwesomeIcon icon={faHouseUser} />
      break;
    case 'hometown':
      icon = <FontAwesomeIcon icon={faMapMarkerAlt} />
      break;
    case 'relationshipStatus':
      icon = <FontAwesomeIcon icon={faHeart} />
      break;
    default:
      icon = "";
      break;
  }

  return (
    <div className='profile-intro-item'>
      <span className='profile-intro-item__icon'>{icon}</span>
      <div className='profile-intro-item__description'>
        <span className='profile-intro-item__prefix'>
          {prefix}
        </span>
        &nbsp;
        <span className='profile-intro-item__value'>
          {value}
        </span>
      </div>
    </div>
  )

}

export default ProfileIntroItem;