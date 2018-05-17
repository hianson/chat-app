const messages = (state = { user: '', messages: [] }, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      console.log('adding message to store:', action.payload)
      return {...state, messages: state.messages.concat(action.payload)}
    default:
      return state
  }
}

export default messages
