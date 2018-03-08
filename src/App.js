import React, { Component } from 'react';
import NavBar from './components/nav/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Humeat Kingdom</h1>
        </header>
        <p className="App-intro">
          The world is running out of water <code>what will you do</code>.
        </p>
      </div>
    );
  }
}


export default App;
