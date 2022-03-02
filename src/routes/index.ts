import express, { Response } from "express";
import userRouter from "./userRouter";

const router = express.Router();

router.use("/user", userRouter);
router.get("/", (_, res: Response): void => {
  res.send("It works");
});

export default router;
