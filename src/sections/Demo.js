import React from 'react';
import LayoutOne from '../images/layout-1.svg';
import LayoutTwo from '../images/layout-2.svg';
import LayoutThree from '../images/layout-3.svg';
import EventIcon from '../images/event-icon.svg';
import Line from '../images/line.svg';
import HorizontalLine from '../images/horizontal-line.svg';
import Whale from '../images/whale.jpg';
import Rainforest from '../images/rainforest.jpg';
import ArrowAug from '../images/arrow-aug.svg';
import ArrowSept from '../images/arrow-sept.svg';

const Demo = ({ matches }) => {
  return (
    <div className='demo'>
      <div className='demo__layout'>
        <h3 className='demo__layout--title'>Choose Your Layout</h3>
        <p className='demo__layout--text'>
          Choose between three different layout options
        </p>
        <div className='demo__layout--card-container'>
          <img
            src={LayoutOne}
            alt='Layout 1, with text on left and image on right'
            className='demo__layout--card'
          />
          <img
            src={LayoutTwo}
            alt='Layout 2, with text on right and image on left'
            className='demo__layout--card'
          />
          <img
            src={LayoutThree}
            alt='Layout 3, with text centered and a background image'
            className='demo__layout--card'
          />
        </div>
      </div>
      <div className='demo__event container'>
        <h3 className='demo__event--title'>Create An Event</h3>
        <p className='demo__event--text'>
          We call our automatic content changes events. Create as many or as few
          events as you like, and schedule your content to change dynamically at
          any time of your choosing.
        </p>
        <div className='demo__event--card-container'>
          {matches && (
            <img
              src={matches ? HorizontalLine : Line}
              alt='a line pointing to the next step in creating an event'
              className='demo__event--card--line one'
            />
          )}
          {matches && (
            <img
              src={matches ? HorizontalLine : Line}
              alt='a line pointing to the next step in creating an event'
              className='demo__event--card--line two'
            />
          )}
          {matches && (
            <img
              src={matches ? HorizontalLine : Line}
              alt='a line pointing to the next step in creating an event'
              className='demo__event--card--line three'
            />
          )}
          <div className='demo__event--card'>
            <span className='demo__event--card--number'>01</span>
            <img
              src={EventIcon}
              alt='Icon for each step in creating an event'
              className='demo__event--card--icon'
            />
            <span className='demo__event--card--description'>
              Create An Event
            </span>
            {!matches && (
              <img
                src={matches ? HorizontalLine : Line}
                alt='a line pointing to the next step in creating an event'
                className='demo__event--card--line one'
              />
            )}
          </div>
          <div className='demo__event--card'>
            <span className='demo__event--card--number'>02</span>
            <img
              src={EventIcon}
              alt='Icon for each step in creating an event'
              className='demo__event--card--icon'
            />
            <span className='demo__event--card--description'>
              Configure Content Changes
            </span>
            {!matches && (
              <img
                src={matches ? HorizontalLine : Line}
                alt='a line pointing to the next step in creating an event'
                className='demo__event--card--line two'
              />
            )}
          </div>
          <div className='demo__event--card'>
            <span className='demo__event--card--number'>03</span>

            <img
              src={EventIcon}
              alt='Icon for each step in creating an event'
              className='demo__event--card--icon'
            />

            <span className='demo__event--card--description'>
              Select The Date And Time For Your Event To Trigger
            </span>
            {!matches && (
              <img
                src={matches ? HorizontalLine : Line}
                alt='a line pointing to the next step in creating an event'
                className='demo__event--card--line three'
              />
            )}
          </div>
          <div className='demo__event--card'>
            <span className='demo__event--card--number'>04</span>
            <img
              src={EventIcon}
              alt='Icon for each step in creating an event'
              className='demo__event--card--icon'
            />
            <span className='demo__event--card--description'>
              Your Content Will Now Change Automatically At The Scheduled Time
            </span>
          </div>
        </div>
      </div>

      <div className='demo__example container'>
        <img
          src={ArrowAug}
          alt='Arrow pointing to card to tell viewer that it will be displayed for the month of August'
          className='demo__example--arrow-aug'
        />
        <img
          src={ArrowSept}
          alt='Arrow pointing to card to tell viewer that it will be displayed for the month of September'
          className='demo__example--arrow-sept'
        />
        {matches ? (
          <>
            <div className='demo__example--card'>
              <div className='demo__example--card--left-col'>
                <img
                  src={Whale}
                  alt='A whale breaching the ocean'
                  className='demo__example--card--image'
                />
              </div>
              <div className='demo__example--card--right-col'>
                <h4 className='demo__example--card--title'>Save the Ocean</h4>

                <p className='demo__example--card--text'>
                  Our oceans needs us now more than ever. Duis sodales dignissim
                  fames habitant. Donec duis velit consequat, amet, pulvinar
                  turpis nam. Aliquet consequat massa urna euismod bibendum sed.
                  Auctor sem nibh purus facilisi aenean enim nibh duis orci.
                </p>
                <button className='demo__example--card--button'>Donate</button>
              </div>
            </div>
            <div className='demo__example--card'>
              <div className='demo__example--card--left-col'>
                <img
                  src={Rainforest}
                  alt='Overlooking the rainforest'
                  className='demo__example--card--image'
                />
              </div>
              <div className='demo__example--card--right-col'>
                <h4 className='demo__example--card--title'>
                  Save the Rainforest
                </h4>

                <p className='demo__example--card--text'>
                  Our rainforests needs us now more than ever. Duis sodales
                  dignissim fames habitant. Donec duis velit consequat, amet,
                  pulvinar turpis nam. Aliquet consequat massa urna euismod
                  bibendum sed. Auctor sem nibh purus facilisi aenean enim nibh
                  duis orci.
                </p>
                <button className='demo__example--card--button'>Donate</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='demo__example--card'>
              <h4 className='demo__example--card--title'>Save the Ocean</h4>
              <img
                src={Whale}
                alt='A whale breaching the ocean'
                className='demo__example--card--image'
              />
              <p className='demo__example--card--text'>
                Our oceans needs us now more than ever. Duis sodales dignissim
                fames habitant. Donec duis velit consequat, amet, pulvinar
                turpis nam. Aliquet consequat massa urna euismod bibendum sed.
                Auctor sem nibh purus facilisi aenean enim nibh duis orci.
              </p>
              <button className='demo__example--card--button'>Donate</button>
            </div>
            <div className='demo__example--card'>
              <h4 className='demo__example--card--title'>
                Save the Rainforest
              </h4>
              <img
                src={Rainforest}
                alt='overlooking the rainforest'
                className='demo__example--card--image'
              />
              <p className='demo__example--card--text'>
                Our rainforests needs us now more than ever. Duis sodales
                dignissim fames habitant. Donec duis velit consequat, amet,
                pulvinar turpis nam. Aliquet consequat massa urna euismod
                bibendum sed. Auctor sem nibh purus facilisi aenean enim nibh
                duis orci.
              </p>
              <button className='demo__example--card--button'>Donate</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Demo;
