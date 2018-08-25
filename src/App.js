import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Container from './Container.js';
import Navigation from './Navigation.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ajay rai</h1>  
        </header>
        <div className="contents">
          <Navigation className='navi'/>
          <div className="games">
            <Container />
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
