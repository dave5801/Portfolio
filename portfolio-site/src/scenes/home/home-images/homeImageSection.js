import React, { Component } from 'react';
import './homeImageSections.css';


class HomeImageSection extends Component {
  render() {
    return (
      <div className="Home-Image-Section">
        <h1>Home Page Images Here</h1>
        <img src={ require('./images/code.png') } />
        <img src={ require('./images/mars.png') } />
        <img src={ require('./images/seattle.png') } />
      </div>
    );
  }
}

export default HomeImageSection;