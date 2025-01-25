// socket-server.js
import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log("User connected");
  socket.on("StartConnection", (data) => {
    socket.emit("code", { data: "Response from server" });
  });
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Socket.IO server running');
});