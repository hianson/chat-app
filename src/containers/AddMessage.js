import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
let input

class AddMessage extends Component {
  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.addMessage(input.value)
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
