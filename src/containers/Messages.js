import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {
  render() {
    let user = this.props.state.user

    if (!user) user = 'guest'
    var messages = this.props.state.messages.map(function(msg, idx) {
      return <li key={idx}>{user}: {msg}</li>
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
