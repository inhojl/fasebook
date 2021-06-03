import React from 'react';

const Navbar = ({ loggedIn }) => {

  return loggedIn ? (
    <div>
      I AM THE NAV BAR
    </div>
  ) : null;
}

export default Navbar;