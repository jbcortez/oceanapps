import React, { useState, useEffect, useRef } from 'react';
import Icon from '../images/icon.svg';
import { Link } from 'react-scroll';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    if (open) {
      hamburger.current.classList.add('open');
      menu.current.classList.add('open');
    } else {
      hamburger.current.classList.remove('open');
      menu.current.classList.remove('open');
    }
  }, [open]);

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__logo'>
          <img src={Icon} alt='OceanApps Icon' />
          OceanApps
        </div>
        <div className='nav__hamburger-wrap' onClick={() => setOpen(!open)}>
          <span ref={hamburger} className='open'></span>
        </div>
        <ul className='nav__menu' ref={menu}>
          <li className='nav__menu--item'>
            <Link
              activeClass='active'
              to='products'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-75}
              duration={500}
              delay={0}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}>
              Products
            </Link>
          </li>
          <li className='nav__menu--item'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-75}
              duration={500}
              delay={0}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}>
              Our Story
            </Link>
          </li>
          <li className='nav__menu--item'>
            <Link
              activeClass='active'
              to='support'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-75}
              duration={500}
              delay={0}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
