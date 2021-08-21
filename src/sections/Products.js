import React from 'react';
import ProductsIllustration from '../images/products-illustration.svg';

const Products = ({ matches }) => {
  return (
    <div className='container products'>
      {matches ? (
        <>
          <div className='products__left-col'>
            <img
              src={ProductsIllustration}
              alt='illustration of woman scheduling events'
              className='products__illustration'
            />
          </div>
          <div className='products__right-col'>
            <h3 className='products__headline'>Call-To-Action Scheduler</h3>
            <p className='products__text products__text--1'>
              We know you’re busy, our CTA Scheduler allows you to display a
              featured CTA according to your schedule. Create multiple CTAs and
              set the start and end times, so your page updates automatically as
              your campaigns change. Get back to doing business as your website
              is automatically kept up to date with CTA Scheduler.
            </p>
          </div>
        </>
      ) : (
        <>
          <h3 className='products__headline'>Call-To-Action Scheduler</h3>
          <div className='products__illustration'>
            <img
              src={ProductsIllustration}
              alt='illustration of woman scheduling events'
            />
          </div>

          <p className='products__text products__text--1'>
            We know you’re busy, our CTA Scheduler allows you to display a
            featured CTA according to your schedule. Create multiple CTAs and
            set the start and end times, so your page updates automatically as
            your campaigns change. Get back to doing business as your website is
            automatically kept up to date with CTA Scheduler.
          </p>
        </>
      )}
    </div>
  );
};

export default Products;
