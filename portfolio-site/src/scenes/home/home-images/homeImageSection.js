import React from 'react';
import './homeImageSections.css';

const HomeImageSection = () => (
  <div className="Home-Image-Section">
    <div className="images">
        <div>

            <img src={ require('./images/mars.png') }  alt="img1"/>
        </div>

        <div>

            <img src={ require('./images/atlantis.png') }  alt="img1"/>
        </div>

        <div>

            <img src={ require('./images/seattle.png') }  alt="img1"/>
        </div>
    </div>
  </div>
);


export default HomeImageSection;