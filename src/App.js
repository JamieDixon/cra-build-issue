import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ageToLabel(age) {
  const map = {
    [age <= 17] : 'Too young',
    [age > 17] : 'Ok'
  }

  return map.true;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        { ageToLabel(21) }
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
