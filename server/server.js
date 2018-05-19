const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res, next) =>
  res.sendFile(__dirname + '/index.html'))

USERS = {}

io.on('connection', function(socket) {
  console.log('Client connected:', socket.id)
  socket.on('new-message', function(msg) {
    console.log(msg.user + ':', msg.body)
    io.emit('receive-message', msg)
  })

  socket.on('new-user', function(user) {
    USERS[socket.id] = user
    io.emit('receive-user', { user, type: 'join', body: 'has joined.' })
    console.log(user, 'has joined chatroom.')
  })

  socket.on('disconnect', function() {
    let user = USERS[socket.id] || socket.id
    
    io.emit('remove-user', { user, type: 'leave', body: 'has left.'})
  })
})

server.listen(port, function() {
  console.log('Server started.')
})
