import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ fetchUsers }) => {

  let history = useHistory();
  const [ input, setInput ] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    //fetchUsers(input.trim())
    history.push(`/search${input ? '?name=' + input : ''}`)
    setInput('')
  } 

  return (
    <form onSubmit={onSubmit} className='search-bar'>
      <span className='search-bar__icon'><FontAwesomeIcon icon={faSearch} /></span>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='search-bar__input'
        placeholder='Search Fasebook'
      ></input>
    </form>
  );
}

export default SearchBar;