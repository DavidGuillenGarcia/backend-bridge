import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (arg) => {
    const message = {
      username: arg.username,
      message: arg.message,
    };
    io.emit("response", message);
    console.log(message);
  });
});
