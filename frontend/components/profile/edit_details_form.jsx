import React from 'react';
import EditDetailsInputs from './edit_details_inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const EditDetailsForm = ({
  setShowEditDetailsForm,
  profile,
  updateProfile,
  relationshipStatuses,
  fetchRelationshipStatuses
}) => {



  return (
    <div className='edit-details'>
      <button onClick={() => setShowEditDetailsForm(false)} type='button' className='edit-details__exit-button'>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1 className='edit-details__heading'>Edit Details</h1>
      <div className='edit-details__divider'></div>
      <div className='edit-details__container'>
        <EditDetailsInputs 
          profile={profile}
          updateProfile={updateProfile}
          relationshipStatuses={relationshipStatuses}
          fetchRelationshipStatuses={fetchRelationshipStatuses}
        />
      </div>
    </div>
  )
}

export default EditDetailsForm;