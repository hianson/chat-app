import React from 'react'
import AddMessage from '../containers/AddMessage'
import Messages from '../containers/Messages'

const Chatroom = () => {
  return (
    <div style={chatroomStyle}>
      <Messages />
      <AddMessage />
    </div>
  )
}

const chatroomStyle = {
  background: '#d4d0c8',
  padding: '30px',
  boxShadow: '2px 2px 2px #5d5c59'
}

export default Chatroom
