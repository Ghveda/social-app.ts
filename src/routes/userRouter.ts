import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("user is working");
});

router.post("/register");

export default router;
