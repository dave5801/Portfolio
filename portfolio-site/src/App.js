import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './scenes/home/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Awesome Personal site</h1>
        </header>
        <p className="App-intro">
          Proclaiming my Awesomeness to the World
        </p>
        <Home></Home>
      </div>
    );
  }
}

export default App;
