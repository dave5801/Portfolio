import React, { Component } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeImageSection from './../home-images/homeImageSection';
import Writings from './../Writings/writings'


const HomePage = () => (
  <div>
    <h2>Awesome Home Page</h2>
    <HomeImageSection></HomeImageSection>
  </div>
);


const About = () => (
  <div>
    <h2>This is where I will write about how I awesome I am</h2>
  </div>
);

const Projects = () => (
  <div>
    <h2>This is where I will showcase my awesome projects</h2>
  </div>
);

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
       
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writings">Writings</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
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