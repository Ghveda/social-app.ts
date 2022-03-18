import { Server } from "socket.io";
import emitter from "../config/eventemitter";

const SetUp = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("some");

    emitter.on("message", (message) => {
      socket.emit("message", message);
    });

    socket.on("message", (message) => {
      console.log(message);
    });

    socket.emit("message", "this is a new message");
  });
  return io;
};

export default SetUp;
