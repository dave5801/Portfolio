import React, { Component } from 'react';
import './footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <Router>
        <div className="Footer">
            <p>
                <Link to="/">LinkedIn</Link>|
                <Link to="/">Github</Link>|
                <Link to="/">Twitter</Link>
            </p>
        </div>
      </Router>
    );
  }
}

export default Footer;
