const http = require('http')//built-in event example

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {      //built-in event
  //server.emit('request')     it doesnt work bcz server.emit not available
  res.end('Welcome')
})

server.listen(5000)
