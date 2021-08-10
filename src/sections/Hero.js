import React from 'react';
import WebsiteBuilderImage from '../images/hero-illustration.svg';
import { Link } from 'react-scroll';

const Hero = ({ matches }) => {
  return (
    <div className='container hero'>
      {matches ? (
        <>
          <div className='hero__left-col'>
            <h1 className='hero__headline'>Make Your Website Work For You</h1>
            <p className='hero__content'>
              We build innovative solutions to make your life easier by
              automating content changes on your website. Just set it and forget
              it.
            </p>
            <div className='hero__btn-container'>
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
                <button className='btn btn-primary'>Learn More</button>
              </Link>
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
                <button className='btn btn-secondary'>Contact Us</button>
              </Link>
            </div>
          </div>
          <div className='hero__right-col'>
            <img
              src={WebsiteBuilderImage}
              alt='illustration of woman building a website'
              className='hero__illustration'
            />
          </div>
        </>
      ) : (
        <>
          <h1 className='hero__headline'>Make Your Website Work For You</h1>
          <div className='hero__illustration'>
            <img
              src={WebsiteBuilderImage}
              alt='illustration of woman building a website'
            />
          </div>
          <p className='hero__content'>
            We build innovative solutions to make your life easier by automating
            content changes on your website. Just set it and forget it.
          </p>
          <div className='hero__btn-container'>
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
              <button className='btn btn-primary'>Learn More</button>
            </Link>
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
              <button className='btn btn-secondary'>Contact Us</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
