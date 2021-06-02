import React from 'react';

const MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const BirthdaySelection = ({ className }) => {
  
  const months = Array(12).fill(0);
  const days = Array(31).fill(0);
  const years = Array(117).fill(0);
  const currentYear = (new Date()).getFullYear();

  return (
    <div className={`${className} birthday-selection`}>
      <div className='birthday-selection__arrow-wrapper'>
        <select className='birthday-selection__select'>
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
        <select className='birthday-selection__select'>
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
        <select className='birthday-selection__select'>
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
  )
}

export default BirthdaySelection;