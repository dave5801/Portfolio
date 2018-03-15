import React, { Component } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Writings from './../Writings/writings';
import HomePage from './../homepage/homepage';
import About from './../About/about';
import Projects from './../Projects/projects';

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="Router-Main">
          <div className="Navbar-main">
            <ul className="Navbar-elements">
              <div className="Nav-left">
                <li>
                  <Link to="/">A Passion for Engineering</Link>
                </li>
              </div>
              <div className="Nav-right">
                <li>
                  <Link to="/writings">Writings</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </div>
            </ul>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/writings" component={Writings} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} /> 
        </div>
      </Router>
    );
  }
}

export default Navbar;