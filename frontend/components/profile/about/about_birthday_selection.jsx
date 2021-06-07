import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const AboutBirthdaySelection = ({ className, year, month, day, setYear, setMonth, setDay, errors, disabled }) => {
  
  const months = Array(12).fill(0);
  const days = Array(31).fill(0);
  const years = Array(117).fill(0);
  const currentYear = (new Date()).getFullYear();


  return (
    <div className={`${className} birthday-selection`}>
      <label className='birthday-selection__label'>Birthday</label>
      <div className='birthday-selection__select-group'>
        <div className='birthday-selection__arrow-wrapper'>
          <span className='birthday-selection__dropdown-icon--profile'>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
          <select 
            className={`birthday-selection__select--profile`}
            value={month} 
            onChange={setMonth}
            disabled={disabled}
          >
          <option value=''>Month</option>
          { months.map((_, month) => 
              <option 
                key={`month-${month}`} 
                value={month + 1}>
                  { MONTHS[month] }
              </option>
            )}
          </select>
        </div>
        <div className='birthday-selection__arrow-wrapper'>
        <span className='birthday-selection__dropdown-icon--profile'>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
          <select 
            className={`birthday-selection__select--profile`}
            value={day} 
            onChange={setDay}
            disabled={disabled}
          >
            <option value=''>Day</option>
            { days.map((_, dayIndex) => 
              <option 
                key={`day-${dayIndex}`} 
                value={dayIndex + 1}>
                  {dayIndex + 1}
              </option>
            )}
          </select>
        </div>
        <div className='birthday-selection__arrow-wrapper'>
        <span className='birthday-selection__dropdown-icon--profile'>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
          <select 
            className={`birthday-selection__select--profile`}
            value={year} 
            onChange={setYear}
            disabled={disabled}
          >
            <option value=''>Year</option>
            
            { years.map((_, year) => 
              <option 
                key={`year-${year}`} 
                value={currentYear - year}>
                  {currentYear - year}
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default AboutBirthdaySelection;