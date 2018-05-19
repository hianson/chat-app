const messages = (state = { user: '', messages: [], socket: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'SET_SOCKET':
      return {...state, socket: action.payload}
    case 'ADD_MESSAGE':
      return {...state, messages: state.messages.concat(action.payload)}
    default:
      return state
  }
}

export default messages
