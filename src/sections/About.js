import React from 'react';
import AboutIllustration from '../images/about-illustration.svg';

const About = ({ matches }) => {
  return (
    <div className='container about'>
      {matches ? (
        <>
          <div className='about__left-col'>
            <h3 className='about__title'>Our Story</h3>
            <p className='about__text--1'>
              We are a husband and wife team in Santa Cruz, California. We’re
              combining our experience working with global technology companies
              and local small businesses to bring scalable best practices to
              small teams everywhere. Our goal is to make keeping your website
              up-to date as easy as possible so you can get back to do the
              things that matter most to you.
            </p>
            <h6 className='about__subtitle'>Why OceanApps?</h6>
            <p className='about__text--2'>
              We’re passionate about giving back to our community and the
              planet.
              <span className='turqoise'>
                {' '}
                10% of our profits are donated to organizations that work
                towards ocean and habitat conservation every quarter.
              </span>
            </p>
          </div>
          <div className='about__right-col'>
            <img
              src={AboutIllustration}
              alt='illustration of a married couple giving eachother high fives'
              className='about__illustration'
            />
          </div>
        </>
      ) : (
        <>
          <h3 className='about__title'>Our Story</h3>
          <p className='about__text--1'>
            We are a husband and wife team in Santa Cruz, California. We’re
            using our 15 years of experience in business automation, software
            development, and customer service to make keeping your website up-to
            date as easy as possible so you can get back to do the things that
            matter most to you.
          </p>
          <h6 className='about__subtitle'>Why OceanApps?</h6>
          <p className='about__text--2'>
            We’re passionate about giving back to our community and the planet.
            <span className='turqoise'>
              {' '}
              10% of our profits are donated to organizations that work towards
              ocean and habitat conservation every quarter.
            </span>
          </p>
          <div className='about__illustration'>
            <img
              src={AboutIllustration}
              alt='illustration of a married couple giving eachother high fives'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default About;
