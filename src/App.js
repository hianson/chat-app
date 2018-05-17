import React, { Component } from 'react';
import AddMessage from './containers/AddMessage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddMessage />
      </div>
    );
  }
}

export default App;
