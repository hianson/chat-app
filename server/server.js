const express = require('express')
const app = express()
const serv = require('http').Server(app)
const io = require('socket.io')(serv)

const port = process.env.PORT || 3001

// add the path module
import path from 'path'
// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// pass the static files (react app) to the express app.
app.use(staticFiles)

io.on('connection', function(socket) {
  console.log('Client connected:', socket.id)
  socket.on('new-message', function(msg) {
    console.log(msg.user + ':', msg.body)
    io.emit('receive-message', msg)
  })
})

serv.listen(port, function() {
  console.log('Server started.')
})
