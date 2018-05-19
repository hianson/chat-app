import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage, receiveUser } from '../actions'
let input

class AddMessage extends Component {
  componentDidMount() {
    var user = this.props.user
    var self = this

    this.props.socket.on('receive-message', function(msg) {
      self.props.addMessage(msg)
    })

    this.props.socket.emit('new-user', user)

    this.props.socket.on('receive-user', function(data) {
      self.props.addMessage(data)
    })

    this.props.socket.on('remove-user', function(data) {
      self.props.addMessage(data)
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
  width: '90%',
  padding: '7px',
}

const msgFieldStyle = {
  width: '90%',
  outline: 'none',
}

const mapStateToProps = state => ({
  user: state.messages.user,
  socket: state.messages.socket
})

const mapDispatchToProps = dispatch => ({
  addMessage: (msg) => dispatch(addMessage(msg)),
  receiveUser: (user) => dispatch(receiveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)
