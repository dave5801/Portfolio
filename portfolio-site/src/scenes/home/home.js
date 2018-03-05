import React, { Component } from 'react';
import './home.css';
import Navbar from './navigation/navbar';
import HomeImageSection from './home-images/homeImageSection';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Content Here</h1>
        <Navbar></Navbar>
        <HomeImageSection></HomeImageSection>
      </div>
    );
  }
}

export default Home;