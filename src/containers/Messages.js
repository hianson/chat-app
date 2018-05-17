import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {
  render() {
    var messages = this.props.messages.map(function(msg, idx) {
      return <li key={idx}>{msg}</li>
    })

    return(
      <div>{ messages }</div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages
})

export default connect(mapStateToProps)(Messages)
