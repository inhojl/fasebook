import React from 'react';

const MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const BirthdaySelection = ({ className, year, month, day, setYear, setMonth, setDay, errors, disabled }) => {
  
  const months = Array(12).fill(0);
  const days = Array(31).fill(0);
  const years = Array(117).fill(0);
  const currentYear = (new Date()).getFullYear();


  return (
    <div className={`${className} birthday-selection`}>
      <label className='birthday-selection__label'>Birthday</label>
      <div className='birthday-selection__select-group'>
        <div className='birthday-selection__arrow-wrapper'>
          <select 
            className={`birthday-selection__select${errors.length ? '--error' : ''}`}
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
          <select 
            className={`birthday-selection__select${errors.length ? '--error' : ''}`}
            value={day} 
            onChange={setDay}
            disabled={disabled}
          >
            <option value=''>Day</option>
            { days.map((_, day) => 
              <option 
                key={`day-${day}`} 
                value={day + 1}>
                  {day + 1}
              </option>
            )}
          </select>
        </div>
        <div className='birthday-selection__arrow-wrapper'>
          <select 
            className={`birthday-selection__select${errors.length ? '--error' : ''}`}
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

export default BirthdaySelection;