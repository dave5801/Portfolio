import React, { Component } from 'react';
import './navbar.css';
import { Navbar } from 'react-bootstrap';

class TopNav extends Component {
  render() {
    return (
      <div className="Navbar">
        <h1>My Awesome Logo | Stuff | More Stuff</h1>
        <Navbar>This shi** navbar</Navbar>
      </div>
    );
  }
}

export default TopNav;