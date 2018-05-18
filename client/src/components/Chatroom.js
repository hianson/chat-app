import React from 'react'
import AddMessage from '../containers/AddMessage'
import Messages from '../containers/Messages'
import TitleBar from '../components/title bar/TitleBar'

const Chatroom = () => {
  return (
    <div style={chatroomStyle}>
      <TitleBar />
      <Messages />
      <AddMessage />
    </div>
  )
}

const chatroomStyle = {
  background: 'linear-gradient(to right, #cacac1, #c4c4bc)',
  padding: '30px',
  // border: '1px solid #e9eced',
  borderTop: '2px solid #dbdcd6',
  borderLeft: '2px solid #dbdcd6',
  boxShadow: '2px 2px 2px #5d5c59'
}

export default Chatroom
