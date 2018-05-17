import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddMessage extends Component {
  render() {
    return(
      <div>AddMessage</div>
    )
  }
}

export default connect()(AddMessage)
