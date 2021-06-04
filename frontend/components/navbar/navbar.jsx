import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import SearchBar from './search_bar';
import NavbarTabItem from './navbar_tab_item';
import NavbarCreateItem from './navbar_create_item';
import NavbarMessengerItem from './navbar_messenger_item';
import NavbarNotificationsItem from './navbar_notifications_item';
import NavbarSettingsItem from './navbar_settings_item';
import NavbarCreateMenu from './navbar_create_menu';
import NavbarMessengerMenu from './navbar_messenger_menu';
import NavbarNotificationsMenu from './navbar_notifications_menu';
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
  logout,
  currentUserId
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
          <NavbarCreateItem 
            id='navbar-create-item'
            active={selected === ItemType.CREATE}
            setSelected={onSelect(ItemType.CREATE)}
          />
          {
            selected === ItemType.CREATE ?
              <OutsideClickNotifier excludeIds={['navbar-create-item']} sideEffect={() => {setSelected('')}}>
                <NavbarCreateMenu />
              </OutsideClickNotifier>
            : null 
          }
        </li>
        <li>
            <NavbarMessengerItem 
              id='navbar-messenger-item'
              active={selected === ItemType.MESSENGER}
              setSelected={onSelect(ItemType.MESSENGER)} 
            />
            {
              selected === ItemType.MESSENGER ? 
                <OutsideClickNotifier excludeIds={['navbar-messenger-item']} sideEffect={() => {setSelected('')}}>
                  <NavbarMessengerMenu /> 
                </OutsideClickNotifier>   
              : null }
        </li>
        <li>
            <NavbarNotificationsItem 
              id='navbar-notifications-item'
              active={selected === ItemType.NOTIFICATIONS}
              setSelected={onSelect(ItemType.NOTIFICATIONS)} />
            {
              selected === ItemType.NOTIFICATIONS ? 
                <OutsideClickNotifier excludeIds={['navbar-notifications-item']} sideEffect={() => {setSelected('')}}>
                  <NavbarNotificationsMenu /> 
                </OutsideClickNotifier> 
              : null 
            }
        </li>
        <li>

            <NavbarSettingsItem 
              id='navbar-settings-item' 
              active={selected === ItemType.SETTINGS}
              setSelected={onSelect(ItemType.SETTINGS)}
            />
            {
              selected === ItemType.SETTINGS ? 
                <OutsideClickNotifier excludeIds={['navbar-settings-item']} sideEffect={() => { setSelected('')}}>
                  <NavbarSettingsMenu currentUserId={currentUserId} setSelected={setSelected} logout={logout}/>
                </OutsideClickNotifier>
                : null 
            }
          
        </li>
      </ul>
    </nav>
  ) : null;
}

export default Navbar;