import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

  const onSubmit = (event) => {
    event.preventDefault();
  } 

  return (
    <form onSubmit={onSubmit} className='search-bar'>
      <span className='search-bar__icon'><FontAwesomeIcon icon={faSearch} /></span>
      <input 
        className='search-bar__input'
        placeholder='Search Fasebook'
      ></input>
    </form>
  );
}

export default SearchBar;