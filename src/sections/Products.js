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
            <h3 className='products__headline'>Easy Automation App</h3>
            <p className='products__text products__text--1'>
              We know you’re busy, our Easy Automation app allows you to create
              engaging campaigns and set the start and end time so your page
              updates automatically when your campaign is over.
            </p>
            <p className='products__text products__text--2'>
              Easy Automation App gives you total control over your timing and
              allows you to make multiple campaigns at once. You can even
              schedule your alerts so they run anytime you choose. Your page
              will then update automatically at the at the set time, adding,
              removing or replacing your campaign according to your
              specifications.
            </p>
          </div>
        </>
      ) : (
        <>
          <h3 className='products__headline'>Easy Automation App</h3>
          <div className='products__illustration'>
            <img
              src={ProductsIllustration}
              alt='illustration of woman scheduling events'
            />
          </div>

          <p className='products__text products__text--1'>
            We know you’re busy, our Easy Automation app allows you to create
            engaging campaigns and set the start and end time so your page
            updates automatically when your campaign is over.
          </p>
          <p className='products__text products__text--2'>
            Easy Automation App gives you total control over your timing and
            allows you to make multiple campaigns at once. You can even schedule
            your alerts so they run anytime you choose. Your page will then
            update automatically at the at the set time, adding, removing or
            replacing your campaign according to your specifications.
          </p>
        </>
      )}
    </div>
  );
};

export default Products;
