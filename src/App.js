import React from 'react';
import Chatroom from './components/Chatroom'
import Username from './containers/Username'
import './App.css';
import { connect } from 'react-redux'

const App = props => {
  const container = props.user ? (<Chatroom />) : (<Username />)
  return (
    <div className="App">
      {container}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.messages.user
})

export default connect(mapStateToProps)(App);
