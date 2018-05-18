const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res, next) =>
  res.sendFile(__dirname + '/index.html'))

io.on('connection', function(socket) {
  console.log('Client connected:', socket.id)
  socket.on('new-message', function(msg) {
    console.log(msg.user + ':', msg.body)
    io.emit('receive-message', msg)
  })
})

server.listen(port, function() {
  console.log('Server started.')
})
