import React from 'react';
import HomeImageSection from './../home-images/homeImageSection';
import './homepage.css'


const HomePage = () => (
  <div className="image-section">
    <div className="home-container">
        <HomeImageSection></HomeImageSection>
    </div>
    <h2>Science | Software | Learning</h2>
  </div>
);

export default HomePage;