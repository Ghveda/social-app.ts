import { Request, Response } from "express";
import { createMessageService, getAll } from "../service/chat.service";

const createMessage = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  const chat = await createMessageService(body);

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

export { createMessage, getMessages };
