import React, { Component } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Awesome Home Page</h2>
  </div>
);

const AboutPage = () => (
  <div>
    <h2>Awesome About Page</h2>
  </div>
);

class TopNav extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
       
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          
        </div>
      </Router>
    );
  }
}



export default TopNav;