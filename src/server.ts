import express from "express";
import * as dotenv from "dotenv";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { connectDB } from "./config/database";

const app = express();
app.use(express.json());
dotenv.config();

const mongoUrl = process.env.MONGO_URL || "ERROR";

connectDB(mongoUrl);

const PORT = process.env.PORT || 5000;

app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The sever is running on http://localhost:${PORT}`);
});
