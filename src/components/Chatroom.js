import React from 'react'
import AddMessage from '../containers/AddMessage'
import Messages from '../containers/Messages'

const Chatroom = () => {
  return (
    <div>
      <Messages />
      <AddMessage />
    </div>
  )
}

export default Chatroom
