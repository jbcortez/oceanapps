import React from 'react';
import CardOneIllustration from '../images/card-1-illustration.svg';
import CardTwoIllustration from '../images/card-2-illustration.svg';
import CardThreeIllustration from '../images/card-3-illustration.svg';
import CardFourIllustration from '../images/burger.svg';

const Cards = ({ matches }) => {
  return (
    <div className='container cards'>
      <div className='cards__card cards__card--1'>
        {matches ? (
          <>
            <div className='cards__card--left-col'>
              <img
                src={CardOneIllustration}
                alt=''
                className='cards__card--illustration'
              />
            </div>
            <div className='cards__card--right-col'>
              <h6 className='cards__card--title'>Run a monthly campaign</h6>
              <p className='cards__card--text'>
                Run a Save the Whales campaign for the month of June, then
                automatically switch to highlight the Save the Rainforest
                campaign in August.
              </p>
            </div>
          </>
        ) : (
          <>
            <h6 className='cards__card--title'>Run a monthly campaign</h6>
            <img
              src={CardOneIllustration}
              alt=''
              className='cards__card--illustration'
            />
            <p className='cards__card--text'>
              Run a Save the Whales campaign for the month of June, then
              automatically switch to highlight the Save the Rainforest campaign
              in August.
            </p>
          </>
        )}
      </div>

      <div className='cards__card cards__card--2'>
        {matches ? (
          <>
            <div className='cards__card--left-col'>
              <img
                src={CardTwoIllustration}
                alt=''
                className='cards__card--illustration'
              />
            </div>
            <div className='cards__card--right-col'>
              <h6 className='cards__card--title'>Advertise your weekly sale</h6>
              <p className='cards__card--text'>
                Set a reoccurring event that is highlighted on your website once
                every week!
              </p>
            </div>
          </>
        ) : (
          <>
            <h6 className='cards__card--title'>Advertise your weekly sale</h6>
            <img
              src={CardTwoIllustration}
              alt=''
              className='cards__card--illustration'
            />
            <p className='cards__card--text'>
              Set a reoccurring event that is highlighted on your website once
              every week!
            </p>
          </>
        )}
      </div>
      <div className='cards__card cards__card--3'>
        {matches ? (
          <>
            <div className='cards__card--left-col'>
              <img
                src={CardThreeIllustration}
                alt=''
                className='cards__card--illustration'
              />
            </div>
            <div className='cards__card--right-col'>
              <h6 className='cards__card--title'>Celebrate a special day</h6>
              <p className='cards__card--text'>
                Celebrate National Ice Cream Day with a commemorative Ice Cream
                Section that starts and expires on the same day.
              </p>
            </div>
          </>
        ) : (
          <>
            <h6 className='cards__card--title'>Celebrate a special day</h6>
            <img
              src={CardThreeIllustration}
              alt=''
              className='cards__card--illustration'
            />
            <p className='cards__card--text'>
              Celebrate National Ice Cream Day with a commemorative Ice Cream
              Section that starts and expires on the same day.
            </p>
          </>
        )}
      </div>
      <div className='cards__card cards__card--4'>
        {matches ? (
          <>
            <div className='cards__card--left-col'>
              <img
                src={CardFourIllustration}
                alt=''
                className='cards__card--illustration'
              />
            </div>
            <div className='cards__card--right-col'>
              <h6 className='cards__card--title'>
                Advertise your daily special
              </h6>
              <p className='cards__card--text'>
                Set your daily specials at the beginning of the week and watch
                them change automatically.
              </p>
            </div>
          </>
        ) : (
          <>
            <h6 className='cards__card--title'>Advertise your daily special</h6>
            <img
              src={CardFourIllustration}
              alt=''
              className='cards__card--illustration'
            />
            <p className='cards__card--text'>
              Set your daily specials at the beginning of the week and watch
              them change automatically.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
