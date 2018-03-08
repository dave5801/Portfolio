import React, { Component } from 'react';
import './footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <Router>
            <div className="Footer">
                <ul>
                    <li><Link to="/">LinkedIn</Link></li>
                    <li><Link to="/">Github</Link></li>
                    <li><Link to="/">Twitter</Link></li>
                </ul>
               
                
                
            </div>
        </Router>
    );
  }
}

export default Footer;
