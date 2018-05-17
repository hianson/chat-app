import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {
  render() {
    var messages = this.props.state.messages.map(function(msg, idx) {
      return <li key={idx}>{msg.user}: {msg.body}</li>
    })

    return(
      <div>{messages}</div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.messages
})

export default connect(mapStateToProps)(Messages)
