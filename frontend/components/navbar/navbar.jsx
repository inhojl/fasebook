import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import SearchBar from './search_bar';
import NavbarTabItem from './navbar_tab_item';
import NavbarCreateItem from './navbar_create_item';
import NavbarMessengerItem from './navbar_messenger_item';
import NavbarNotificationsItem from './navbar_notifications_item';
import NavbarSettingsItem from './navbar_settings_item';
import NavbarSettingsMenu from './navbar_settings_menu';
import OutsideClickNotifier from '../shared/outside_click_notifier';



const ItemType = {
  CREATE: 'CREATE',
  MESSENGER: 'MESSENGER',
  NOTIFICATIONS: 'NOTIFICATIONS',
  SETTINGS: 'SETTINGS'
}

const Navbar = ({ 
  loggedIn,
  logout
}) => {

  const [selected, setSelected] = useState('');

  const onSelect = (type) => {
    return (e) => {
      setSelected(type === selected ? '' : type);
    }
  }

  return loggedIn ? (
    <nav className='navbar-layout'>
      <ul className='navbar-layout__search-section'>
        <li className='navbar-layout__search-item'>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
        <li className='navbar__search-item'><SearchBar /></li>
      </ul>
      <ul className='navbar-layout__tabs-section'>

        <li className='navbar-layout__tab-item'>
          <NavbarTabItem
            type='home'
            path='/'
          />
        </li>
        <li className='navbar-layout__tab-item'>
          <NavbarTabItem
            type='friends'
            path='/friends'
          />
        </li>
      </ul>
      <ul className='navbar-layout__user-section'>
        <li>
          <NavbarCreateItem setSelected={() => setSelected(ItemType.CREATE)} />
          {selected === ItemType.CREATE ? console.log('create') : null }
        </li>
        <li>
          <NavbarMessengerItem setSelected={() => setSelected(ItemType.MESSENGER)} />
          {selected === ItemType.MESSENGER ? console.log('messenger') : null }
        </li>
        <li>
          <NavbarNotificationsItem setSelected={() => setSelected(ItemType.NOTIFICATIONS)} />
          {selected === ItemType.NOTIFICATIONS ? console.log('notifications') : null }
        </li>
        <li>
          <OutsideClickNotifier sideEffect={() => {setSelected('')}}>
            <NavbarSettingsItem selected={selected} setSelected={onSelect(ItemType.SETTINGS)} />
            {
              selected === ItemType.SETTINGS ? 
                <NavbarSettingsMenu setSelected={setSelected} logout={logout}/>
              : null 
            }
          </OutsideClickNotifier>
        </li>
      </ul>
    </nav>
  ) : null;
}

export default Navbar;