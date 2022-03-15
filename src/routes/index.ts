import express, { Response } from "express";
import userRouter from "./userRouter";
import chatRouter from "./chatRouter";

const router = express.Router();

router.use("/user", userRouter);
router.use("chat", chatRouter);
router.get("/", (_, res: Response): void => {
  res.send("It works");
});

export default router;
