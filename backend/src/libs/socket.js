import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

// Used to store online users
const userSocketMap = {}; // {userId: socketId}

export function getReceiverSocketId(userId){
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if(userId) userSocketMap[userId] = socket.id;

  // io.emit() to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); // array of userId
  
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // array of userId
  });
});

export { io, app, server };
