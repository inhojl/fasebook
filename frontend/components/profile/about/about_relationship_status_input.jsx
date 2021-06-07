import React, { useState } from 'react';
import { snakeCase } from 'snake-case';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const AboutRelationshipStatusInput = ({ profile, name, updateProfile, onCancel, relationshipStatuses, errors }) => {

  const [relationshipStatusId, setRelationshipStatusId] = useState(profile.relationshipStatusId || '')

  const onSubmit = (event) => {
    event.preventDefault();
    updateProfile({ id: profile.id, [snakeCase(name)]: relationshipStatusId })
    onCancel();
  }

  return (
    <form onSubmit={onSubmit} className='input-form'>
    <div className='birthday-selection__arrow-wrapper--profile'>
      <span className='birthday-selection__dropdown-icon--profile'>
        <FontAwesomeIcon icon={faSortDown} />
      </span>
      <select
        className='birthday-selection__select--profile'
        value={relationshipStatusId}
        onChange={(e) => setRelationshipStatusId(e.target.value)}
      >
        <option value=''>Status</option>
        {Object.values(relationshipStatuses).map((relationshipStatus) =>
          <option
            key={`relationship-status-${relationshipStatus.id}`}
            value={relationshipStatus.id}>
            {relationshipStatus.label}
          </option>
        )}
      </select>
    </div>

      <div className='input-form__divider'></div>
      <div className='input-form__form-options'>
        <button onClick={onCancel} className='input-form__cancel-button' type='button'>Cancel</button>
        <button className='input-form__submit-button' type='submit'>Save</button>
      </div>
    </form>
  );
}

export default AboutRelationshipStatusInput;



