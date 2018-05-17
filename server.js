var app = require('express')()
var serv = require('http').Server(app)
var io = require('socket.io')(serv)

io.on('connection', function(socket) {
  console.log('Client connected:', socket.id)
  socket.on('new-message', function(msg) {
    console.log(msg.user + ':', msg.body)
    io.emit('receive-message', msg)
  })
})

serv.listen('3001', function() {
  console.log('Server started.')
})
