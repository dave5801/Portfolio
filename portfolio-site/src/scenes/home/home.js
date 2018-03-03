import React, { Component } from 'react';
import './home.css';
import TopNav from './navigation/navbar';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Content Here</h1>
        <TopNav></TopNav>
      </div>
    );
  }
}

export default Home;