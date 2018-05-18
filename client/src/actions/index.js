export const addMessage = msg => ({
  type: 'ADD_MESSAGE',
  payload: msg
})

export const setUser = user => ({
  type: 'SET_USER',
  payload: user
})

export const setSocket = socket => ({
  type: 'SET_SOCKET',
  payload: socket
})
