import React, { Component } from 'react';
import './home.css';
import Navbar from './navigation/navbar';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Main Page</h1>
        <Navbar></Navbar>
        
      </div>
    );
  }
}

export default Home;