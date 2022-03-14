import { Request, Response } from "express";
import { chatService } from "../service/chat.service";

const chatController = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  const chat = await chatService(body);

  if (chat.status) {
    res.status(chat.status).json(chat.error);
    return;
  }

  res.json(chat);
};

export { chatController };
