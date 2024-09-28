const WebSocketClient = require("websocket").client;

const client = new WebSocketClient();

client.on("connect", (connection) => {
  connection.send("Hello");
  connection.on("message", (message) => {
    console.log(message.toString());
  });
});

client.connect("ws://localhost:8080");
