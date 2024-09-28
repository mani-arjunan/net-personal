const WebSocket = require('ws')

const ws = new WebSocket.Server({ port: 8080 }, () => {
  console.log('WebSocket is running at port: ', 8080)
}) 

ws.on('connection', (connection) => {
  console.log('New Client Connected, Total no. of Clients: ', ws.clients.size)

  connection.send("Hello From Server")

})

