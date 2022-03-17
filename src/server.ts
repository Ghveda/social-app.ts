import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";

import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { connectDB } from "./config/database";
import socket from "./config/socket";
import { Server } from "socket.io";

const main = async () => {
  const app = express();
  dotenv.config();
  // Cors config
  const options: cors.CorsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  };
  app.use(cors(options));

  // Socket config
  const server = createServer(app);
  // await socket(server);

  // junk
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("message", (message) => {
      console.log(message);
    });
    console.log("llUser is connected");
  });

  app.use(express.json());

  // MongoDB config
  const mongoUrl = process.env.MONGO_URL || "ERROR";
  connectDB(mongoUrl);

  const PORT = process.env.PORT || 5000;

  // Routes
  app.use("/api", router);
  app.use(errorHandler);

  server.listen(PORT, () => {
    console.log(`The sever is running on http://localhost:${PORT}`);
  });
};

main();
