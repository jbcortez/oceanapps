import React from 'react';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo'>OceanApps</div>
      <div className='nav__menu-container'>
        <ul className='nav__menu'>
          <li className='nav__menu--item'>Products</li>
          <li className='nav__menu--item'>Our Story</li>
          <li className='nav__menu--item'>Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
