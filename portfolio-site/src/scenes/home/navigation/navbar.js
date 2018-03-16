import React, { Component } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Writings from './../Writings/writings';
import HomePage from './../homepage/homepage';
import About from './../About/about';
import Projects from './../Projects/projects';



class Navbar extends Component {
  render() {

    var linkStyle = {
      textDecoration: 'none', 
      color: 'white'
    };

    return (
      <Router>
        <div className="Router-Main">
          <div className="Navbar-main">
            <ul className="Navbar-elements">
              <div className="Nav-left">
                <li>
                  <Link to="/" style={{textDecoration: 'none', color: '#8b939b'}}>A Passion for Engineering</Link>              
                </li>
              </div>
              <div className="Nav-right">
                <li>
                  <Link to="/writings" style={{textDecoration: 'none', color: '#8b939b'}}>Writings</Link>
                </li>
                <li>
                  <Link to="/about" style={{textDecoration: 'none', color: '#8b939b'}}>About</Link>
                </li>
                <li>
                  <Link to="/projects" style={{textDecoration: 'none', color: '#8b939b'}}>Projects</Link>
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