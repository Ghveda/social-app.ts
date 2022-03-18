import { Router } from "express";
import { createMessage, getMessages } from "../controllers/chatController";

const router = Router();

router.post("/create", createMessage);
router.get("/messages", getMessages);

export default router;
