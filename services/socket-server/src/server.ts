import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  socket.on("driver:online", (payload) => {
    io.emit("driver:online", payload);
  });

  socket.on("driver:location:update", (payload) => {
    io.emit("driver:location:update", payload);
  });

  socket.on("booking:accepted", (payload) => {
    io.emit("booking:accepted", payload);
  });
});

httpServer.listen(Number(process.env.PORT ?? 4001), "0.0.0.0");
