const net = require("net");

const client = net.createConnection(
  {
    port: 9500,
    host: "192.168.0.111",
  },
  function () {
    client.write("Hello Server from Mac!");

    client.on("data", (data) => {
      console.log("Received response ");
      console.log(data.toString());
    });

    setInterval(() => {
      client.write("PING!");
    }, 5000);
  },
);
