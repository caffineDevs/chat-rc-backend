const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 8080;

app.get("*", (req, res) => {
  res.send("connection established !");
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (message) => {
    io.emit("message", message);
  });
});

// Start the app
http.listen(port, () => console.log(`API listening on ${port}`));
