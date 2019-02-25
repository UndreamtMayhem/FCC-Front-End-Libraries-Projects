import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <p>Drum machine</p>
        <header id="display" className="App-header">
         <p>Display</p>
        </header>
        <div className="padBank">
        <p>padBank</p>
        </div>
      </div>
    );
  }
}

export default App;
