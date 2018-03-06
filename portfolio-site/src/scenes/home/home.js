 import React, { Component } from 'react';
import './home.css';
import Navbar from './navigation/navbar';
import Footer from './Footer/footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Main Page</h1>
        <Navbar></Navbar>
        <Footer></Footer>
        
      </div>
    );
  }
}

export default Home;