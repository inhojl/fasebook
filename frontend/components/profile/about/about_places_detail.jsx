import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const AboutPlacesDetail = () => {




  const AddButton = ({ message }) => (
    <button type='button' className='about-places-detail__add-button'>
      <span className='about-places-detail__add-button-icon'>
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <span className='about-places-detail__add-button-message'>{message}</span>
    </button>
  )

  console.log('im rendering')
  return (
    <div className='about-places-detail'>
      <h1 className='about-places-detail__heading'>Places Lived</h1>
      <AddButton message='Add current city' />
      <AddButton message='Add hometown' />
    </div>
  )
}

export default AboutPlacesDetail;