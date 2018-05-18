import React, { Component } from 'react';
import Chatroom from './components/Chatroom'
import Username from './containers/Username'
import { connect } from 'react-redux'
import { setSocket } from './actions'

const socket = window.io('/')

class App extends Component {
  componentDidMount() {
    this.props.setSocket(socket)
  }

  render() {
    const container = this.props.user ? <Chatroom /> : <Username />
    return (
      <div style={appStyle}>
        {container}
      </div>
    );
  }
}

const appStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#008080'
}

const mapStateToProps = state => ({
  user: state.messages.user
})

const mapDispatchToProps = dispatch => ({
  setSocket: (socket) => dispatch(setSocket(socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
