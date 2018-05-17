import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
const socket = window.io('http://localhost:3001')
let input

class AddMessage extends Component {
  componentDidMount() {
    var self = this

    socket.on('receive-message', function(msg) {
      self.props.addMessage(msg)
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          socket.emit('new-message', input.value)
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: (msg) => dispatch(addMessage(msg))
})

export default connect(undefined, mapDispatchToProps)(AddMessage)
