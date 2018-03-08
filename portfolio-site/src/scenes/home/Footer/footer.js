import React, { Component } from 'react';
import './footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <Router>
            <div className="Footer">
                <ul className="Footer-elements-left">
                    <li className="social-link">Social Media | </li>
                    <li><Link to="/" className="social-link">LinkedIn</Link></li>
                    <li><Link to="/" className="social-link">Github</Link></li>
                    <li><Link to="/" className="social-link">Twitter</Link></li>
                </ul>
                <ul className="Footer-elements-right">
                    <li className="social-link">2018 The Franklin Research Initiative </li>     
                </ul>  
            </div>
        </Router>
    );
  }
}

export default Footer;
