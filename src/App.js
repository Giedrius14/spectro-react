import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import CurrentPriceContainer from "./components/CurrentPrice/CurrentPriceContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spectro</h1>
        </header>
        <CurrentPriceContainer/>
      </div>
    );
  }
}


export default App;
