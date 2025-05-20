import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (arg) => {
    io.emit("response", `${socket.id}: ${arg}`);
    console.log(arg);
  });
});
