const messages = (state = { user: '', messages: [] }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'ADD_MESSAGE':
      return {...state, messages: state.messages.concat(action.payload)}
    default:
      return state
  }
}

export default messages
