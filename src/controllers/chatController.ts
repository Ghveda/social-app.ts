import { Request, Response } from "express";
import { chatService, getAll } from "../service/chat.service";

const chatController = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  const chat = await chatService(body);

  if (chat.error) {
    res.status(chat.status).json(chat.error);
    return;
  }

  res.json(chat);
  return;
};

const getMessages = async (req: Request, res: Response): Promise<void> => {
  const messages = await getAll();

  if (messages.error) {
    res.status(messages.status).json(messages.error);
    return;
  }

  res.json(messages);
  return;
};

export { chatController, getMessages };
