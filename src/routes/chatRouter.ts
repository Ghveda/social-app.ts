import { Router } from "express";
import { chatController, getMessages } from "../controllers/chatController";

const router = Router();

router.post("/message", chatController);
router.get("/messages", getMessages);

export default router;
