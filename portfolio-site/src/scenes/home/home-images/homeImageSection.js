import React from 'react';
import './homeImageSections.css';

const HomeImageSection = () => (
  <div className="Home-Image-Section">
    <h1>Hello World</h1>
    <img src={ require('./images/atlantis.png') }  alt="img1"/>
  </div>
);


export default HomeImageSection;