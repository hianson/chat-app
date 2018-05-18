import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
let input

class AddMessage extends Component {
  componentDidMount() {
    var self = this

    this.props.socket.on('receive-message', function(msg) {
      self.props.addMessage(msg)
    })
  }

  render() {
    return(
      <div style={addMessageStyle}>
        <form onSubmit={(e) => {
          e.preventDefault()
          let user = this.props.user
          if (!input.value) return
          if (!user) user = this.props.socket.id
          this.props.socket.emit('new-message', {user, body: input.value})
          input.value = ''
        }}>
          <input style={msgFieldStyle} ref={node => input = node} />
          &nbsp;
          <button>Send</button>
        </form>
      </div>
    )
  }
}

const addMessageStyle = {
}

const msgFieldStyle = {
  width: '45vw',
  outline: 'none',
}

const mapStateToProps = state => ({
  user: state.messages.user,
  socket: state.messages.socket
})

const mapDispatchToProps = dispatch => ({
  addMessage: (msg) => dispatch(addMessage(msg))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)
