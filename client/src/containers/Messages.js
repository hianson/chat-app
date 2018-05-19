import React, { Component } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {

  scrollToBottom = () => {
    this.lastMessage.scrollIntoView({ behavior: 'instant' })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    var messages = this.props.state.messages.map(function(msg, idx) {
      if (msg.type === 'join') {
        return <li style={{fontStyle: 'italic'}} key={idx}>{msg.user} {msg.body}</li>
      }
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
  width: '50vw',
  height: '30vh',
  border: '1px solid #565452',
  borderRightColor: '#d7d8d4',
  borderBottomColor: '#d7d8d4',
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
