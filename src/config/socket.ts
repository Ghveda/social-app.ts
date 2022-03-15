import { Server } from "socket.io";
import emitter from "../config/eventemitter";

const setupWS = async (server: any) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    console.log("something");

    socket.emit("join", "Hi There!");
    emitter.on("message", (message) => {
      socket.emit("message", message);
    });

    socket.on("message", (message) => {
      console.log(message);
    });
  });
};

export default setupWS;
