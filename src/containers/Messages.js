import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {

  scrollToBottom = () => {
    this.lastMessage.scrollIntoView({ behavior: 'smooth' })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    var messages = this.props.state.messages.map(function(msg, idx) {
      return <li key={idx}><strong>{msg.user}</strong>: {msg.body}</li>
    })

    return(
      <div style={messagesContainer}>
        <ul style={listStyle}>
          {messages}
        </ul>
        <div ref={(node) => { this.lastMessage = node; }}/>
      </div>
    )
  }
}

const messagesContainer = {
  overflowY: 'scroll',
  padding: '7px',
  marginBottom: '15px',
  width: '80vw',
  height: '60vh',
  border: '1px solid #565452',
  boxShadow: '-1px -1px 1px #5d5c59',
  background: 'white',
  fontFamily: 'Times New Roman',
}

const listStyle = {
  margin: '0',
  padding: '0',
  listStyleType: 'none',
}

const mapStateToProps = state => ({
  state: state.messages
})

export default connect(mapStateToProps)(Messages)
