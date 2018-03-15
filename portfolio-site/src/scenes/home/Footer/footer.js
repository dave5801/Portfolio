import React, { Component } from 'react';
import './footer.css';
import { BrowserRouter as Router} from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <Router>
            <div className="Footer">
                <ul className="Footer-elements-left">
                    <li className="social-link">Social Media</li>
                    <li><a href="https://github.com/dave5801">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/david-franklin-6063bba2/">LinkedIn</a></li>
                    <li><a href="https://twitter.com/dave58011">Twitter</a></li>
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
