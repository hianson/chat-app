import React, { Component } from 'react';
import AddMessage from './containers/AddMessage'
import Messages from './containers/Messages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Messages />
        <AddMessage />
      </div>
    );
  }
}

export default App;
