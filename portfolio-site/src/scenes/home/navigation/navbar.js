import React, { Component } from 'react';
import './navbar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
      <div className="Navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">My Awesome Logo</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Writings
              </NavItem>
              <NavItem eventKey={2} href="#">
                Projects
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;