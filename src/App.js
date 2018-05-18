import React from 'react';
import Chatroom from './components/Chatroom'
import Username from './containers/Username'
import { connect } from 'react-redux'

const App = props => {
  const container = props.user ? <Chatroom /> : <Username />
  return (
    <div style={appStyle}>
      {container}
    </div>
  );
}

const appStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const mapStateToProps = state => ({
  user: state.messages.user
})

export default connect(mapStateToProps)(App);
