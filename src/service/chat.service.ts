import Message from "../models/Message";
import { messageBody } from "../interface/messageInterface";
import emitter from "../config/eventemitter";

const chatService = async (body: messageBody) => {
  try {
    const { message, username } = body;
    const createMessage = await Message.create({
      username,
      message,
    });

    if (!createMessage) {
      return { status: 404, error: "ERROR_IN_CREATION_MESSAGE" };
    }
    // socket
    emitter.emit("message", "You have new message");

    return { status: 201, message: "success" };
  } catch (error) {
    return { status: 404, error };
  }
};

const getAll = async (): Promise<any> => {
  try {
    const messages = await Message.find();
    if (!messages) {
      return { status: 404, error: "ERROR_IN_MESSAGES" };
    }

    return messages;
  } catch (error) {
    return { status: 404, error };
  }
};

export { chatService, getAll };
