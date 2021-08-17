import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link
        activeClass='active'
        to='hero'
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={1000}
        delay={0}
        isDynamic={true}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}>
        <img src={Logo} alt='OceanApps logo' className='footer__logo' />
      </Link>

      <ul className='footer__menu'>
        <li className='footer__menu--item'>
          <Link
            activeClass='active'
            to='products'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
            delay={0}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Products
          </Link>
        </li>
        <li className='footer__menu--item'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
            delay={0}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Our Story
          </Link>
        </li>
        <li className='footer__menu--item'>
          <Link
            activeClass='active'
            to='support'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
            delay={0}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Contact
          </Link>
        </li>
        <li className='footer__menu--item'>
          <a href='https://www.iubenda.com/privacy-policy/14786249/legal'>
            Privacy Policy
          </a>
        </li>
      </ul>

      <div className='footer__copyright align-center'>
        Ocean Apps LLC &copy; 2021 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
