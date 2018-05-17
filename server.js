var app = require('express')()
var serv = require('http').Server(app)
var io = require('socket.io')(serv)

io.on('connection', function(socket) {
  console.log('Client connected:', socket.id)
})

serv.listen('3000', function() {
  console.log('Server started.')
})
