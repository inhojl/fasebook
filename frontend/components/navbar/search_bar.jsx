import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import OutsideClickNotifier from '../shared/outside_click_notifier';

const SearchBar = ({ fetchUsers }) => {



  let history = useHistory();
  const [ input, setInput ] = useState('')
  const [ show, setShow ] = useState(false)
  const ref = useRef();

  useEffect(() => {
    if (show) {
      ref.current.focus();
    }
  }, [show])

  const onToggle = (event) => {
    event.preventDefault();
    setInput('')
    setShow(!show);
  }


  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    //fetchUsers(input.trim())
    history.push(`/search${input ? '?name=' + input : ''}`)
    setInput('')
  } 


//   <OutsideClickNotifier excludeIds={['navbar-create-item']} sideEffect={() => { setSelected('') }}>
//   <NavbarCreateMenu  setShowPostForm={setShowPostForm} setSelected={setSelected}/>
// </OutsideClickNotifier>

  return (
   <OutsideClickNotifier excludeIds={['search-bar']} sideEffect={() => { setShow(false) }}>

    <form id='search-bar' onSubmit={onSubmit} className='search-bar'>
      <span className={`search-bar__icon${show ? '--show' : ''}`} onClick={onToggle}><FontAwesomeIcon icon={faSearch} /></span>
      <input
        ref={ref}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`search-bar__input${show ? '--show' : ''}`}
        disabled={!show}
        placeholder='Search Fasebook'
      ></input>
    </form>
    </OutsideClickNotifier>
  );
}

export default SearchBar;